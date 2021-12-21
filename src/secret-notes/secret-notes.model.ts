import { Schema } from 'mongoose';

export const SecretNoteSchema = new Schema({
  owner: { type: String, required: true },
  note: { type: String, required: true },
});

export interface ISecretNote {
  id: string;
  owner: string;
  note: string;
}
