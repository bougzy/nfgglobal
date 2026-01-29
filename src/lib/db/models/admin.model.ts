import mongoose, { Schema, Document } from "mongoose";

export interface IAdminDoc extends Document {
  username: string;
  passwordHash: string;
  updatedAt: Date;
}

const AdminSchema = new Schema<IAdminDoc>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true }
);

export const Admin =
  mongoose.models.Admin ||
  mongoose.model<IAdminDoc>("Admin", AdminSchema);
