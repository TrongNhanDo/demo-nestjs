import { Document, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    username: String,
    password: String,
    displayName: String,
    phone: String,
    address: String,
  },
  {
    timestamps: true,
    collection: 'users',
  },
);

export default userSchema;

export interface User extends Document {
  username: string;
  password: string;
  displayName: string;
  phone: string;
  address: string;
}
