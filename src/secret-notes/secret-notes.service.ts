import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { encrypt, decrypt } from 'src/crypto';

import { UsersService } from 'src/users/users.service';
import { ISecretNote } from './secret-notes.model';

@Injectable()
export class SecretNotesService {
  constructor(
    @InjectModel('SecretNote')
    private readonly secretNoteModel: Model<ISecretNote>,
    private readonly userService: UsersService,
  ) {}

  async create({ owner, note }: ISecretNote) {
    try {
      const newNote = new this.secretNoteModel(
        await this.encryptNote({ id: undefined, owner, note }),
      );
      return (await newNote.save()).id as string;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findAll(encrypted: boolean = false) {
    try {
      const notes = (await this.secretNoteModel.find().exec()) as ISecretNote[];
      return encrypted
        ? notes.map(this.getNormalizedNote)
        : await Promise.all(
            notes.map(
              async (note) =>
                await this.decryptNote(this.getNormalizedNote(note)),
            ),
          );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findOne(id: string, encrypted: boolean = false) {
    try {
      const note = (await this.secretNoteModel
        .findById(id)
        .exec()) as ISecretNote;
      if (note)
        return encrypted
          ? this.getNormalizedNote(note)
          : await this.decryptNote(this.getNormalizedNote(note));
      else throw new NotFoundException('The note do not exist.');
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  update(id: string, update: ISecretNote) {
    return null;
  }

  remove(id: string) {
    return 0;
  }

  private async getKey(userId: string): Promise<string> {
    const { key } = await this.userService.findOne(userId);
    return key;
  }

  private getNormalizedNote({ id, owner, note }: ISecretNote): ISecretNote {
    return { id, owner, note };
  }

  private async encryptNote(note: ISecretNote): Promise<ISecretNote> {
    return {
      ...note,
      note: await encrypt(note.note, await this.getKey(note.owner)),
    };
  }
  private async decryptNote(encryptedNote: ISecretNote): Promise<ISecretNote> {
    return {
      ...encryptedNote,
      note: await decrypt(
        encryptedNote.note,
        await this.getKey(encryptedNote.owner),
      ),
    };
  }
}
