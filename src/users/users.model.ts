import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: { type: String, required: true },
  key: { type: String },
});

export interface IUser {
  id: string;
  name: string;
  key: string;
}
