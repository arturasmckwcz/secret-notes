import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { generateUserKey } from '../crypto';

import { IUser } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<IUser>,
  ) {}

  async create({ name }: IUser) {
    try {
      const newUser = new this.userModel({ name, key: generateUserKey() });
      return (await newUser.save()).id as string;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  findAll() {
    return null;
  }

  async findOne(id: string) {
    try {
      const user = await this.userModel.findById(id);
      return this.getNormalizedUser(user);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  update(id: string, update: IUser) {
    return null;
  }

  remove(id: string) {
    return 0;
  }

  private getNormalizedUser({ id, name, key }: IUser): IUser {
    return { id, name, key };
  }
}
