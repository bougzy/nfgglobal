import mongoose, { Schema, Document } from "mongoose";

export interface ICategoryDoc extends Document {
  name: string;
  slug: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new Schema<ICategoryDoc>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

CategorySchema.index({ order: 1 });

export const Category =
  mongoose.models.Category ||
  mongoose.model<ICategoryDoc>("Category", CategorySchema);
