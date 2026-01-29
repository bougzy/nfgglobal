import mongoose, { Schema, Document } from "mongoose";

export interface IProductDoc extends Document {
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category: mongoose.Types.ObjectId;
  inventory: number;
  isJustArrived: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProductDoc>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    images: [{ type: String }],
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    inventory: { type: Number, default: 0, min: 0 },
    isJustArrived: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

ProductSchema.index({ category: 1, isActive: 1 });
ProductSchema.index({ isJustArrived: 1, isActive: 1 });

export const Product =
  mongoose.models.Product ||
  mongoose.model<IProductDoc>("Product", ProductSchema);
