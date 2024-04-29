import { Document, Schema } from 'mongoose';

const roleSchema = new Schema(
  {
    roleId: String,
    roleName: String,
    createdBy: String,
    status: Boolean,
  },
  {
    timestamps: true,
    collection: 'roles',
  },
);

export default roleSchema;

export interface Role extends Document {
  roleId: string;
  roleName: string;
  createdBy: string;
  status: boolean;
}
