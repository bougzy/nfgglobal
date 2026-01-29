export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export type CategoryFormData = {
  name: string;
  order: number;
  isActive: boolean;
};
