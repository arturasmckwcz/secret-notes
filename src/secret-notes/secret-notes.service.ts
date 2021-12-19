import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSecretNoteDto } from './dto/create-secret-note.dto';
import { UpdateSecretNoteDto } from './dto/update-secret-note.dto';

@Injectable()
export class SecretNotesService {
  private notes: CreateSecretNoteDto[] = [];

  create(note: CreateSecretNoteDto) {
    note.id = +new Date();
    this.notes.push(note);
    return note.id;
  }

  findAll() {
    return this.notes.map((note) => ({ ...note }));
  }

  findOne(id: number) {
    return this.getNoteByID(id)[1];
  }

  update(id: number, update: UpdateSecretNoteDto) {
    const [idx, note] = this.getNoteByID(id);
    const updatedNote = { ...note, ...update };
    this.notes[idx] = updatedNote;
    return updatedNote.id;
  }

  remove(id: number) {
    const [idx, _] = this.getNoteByID(id);
    this.notes.splice(idx, 1);
    return 1;
  }

  private getNoteByID(id: number): [number, CreateSecretNoteDto] {
    const idx = this.notes.findIndex((note) => note.id === id);
    if (idx === -1) throw new NotFoundException('Note does not exist!');
    return [idx, this.notes[idx]];
  }
}
