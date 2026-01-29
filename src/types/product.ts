export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category: string | IProductCategory;
  inventory: number;
  isJustArrived: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IProductCategory {
  _id: string;
  name: string;
  slug: string;
}

export type ProductFormData = {
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  inventory: number;
  isJustArrived: boolean;
  isActive: boolean;
};
