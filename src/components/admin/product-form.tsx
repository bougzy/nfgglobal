"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createProduct, updateProduct } from "@/lib/actions/product.actions";
import { IProduct } from "@/types/product";
import { ICategory } from "@/types/category";

interface ProductFormProps {
  product?: IProduct;
  categories: ICategory[];
}

export function ProductForm({ product, categories }: ProductFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const [name, setName] = useState(product?.name || "");
  const [description, setDescription] = useState(product?.description || "");
  const [price, setPrice] = useState(product?.price?.toString() || "");
  const [category, setCategory] = useState(
    typeof product?.category === "string"
      ? product.category
      : product?.category?._id || ""
  );
  const [inventory, setInventory] = useState(
    product?.inventory?.toString() || "0"
  );
  const [images, setImages] = useState<string[]>(
    product?.images?.length ? product.images : [""]
  );
  const [isJustArrived, setIsJustArrived] = useState(
    product?.isJustArrived || false
  );
  const [isActive, setIsActive] = useState(product?.isActive ?? true);

  function addImageField() {
    setImages([...images, ""]);
  }

  function removeImageField(index: number) {
    setImages(images.filter((_, i) => i !== index));
  }

  function updateImage(index: number, value: string) {
    const updated = [...images];
    updated[index] = value;
    setImages(updated);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const validImages = images.filter((img) => img.trim() !== "");
    if (validImages.length === 0) {
      setError("At least one image URL is required");
      return;
    }

    const data = {
      name,
      description,
      price: parseFloat(price),
      images: validImages,
      category,
      inventory: parseInt(inventory),
      isJustArrived,
      isActive,
    };

    startTransition(async () => {
      try {
        const result = product
          ? await updateProduct(product._id, data)
          : await createProduct(data);

        if (!result.success) {
          setError("error" in result ? result.error : "An error occurred");
          return;
        }

        router.push("/admin/dashboard/products");
        router.refresh();
      } catch {
        setError("An error occurred. Please try again.");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      <Input
        id="name"
        label="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="e.g. Diamond Necklace"
        required
      />

      <Textarea
        id="description"
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe the product..."
        required
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="price"
          label="Price"
          type="number"
          min="0"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="0.00"
          required
        />

        <Input
          id="inventory"
          label="Inventory"
          type="number"
          min="0"
          value={inventory}
          onChange={(e) => setInventory(e.target.value)}
          required
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="category" className="block text-sm font-medium text-white/70">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-200"
          required
        >
          <option value="" className="bg-[#1a1a2e]">
            Select category
          </option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id} className="bg-[#1a1a2e]">
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-white/70">
          Image URLs
        </label>
        {images.map((img, i) => (
          <div key={i} className="flex gap-2">
            <Input
              value={img}
              onChange={(e) => updateImage(i, e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="flex-1"
            />
            {images.length > 1 && (
              <button
                type="button"
                onClick={() => removeImageField(i)}
                className="px-3 text-red-400 hover:text-red-300 transition-colors"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addImageField}
          className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
        >
          + Add another image
        </button>
      </div>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isJustArrived}
            onChange={(e) => setIsJustArrived(e.target.checked)}
            className="w-4 h-4 rounded border-white/20 bg-white/5 text-amber-500 focus:ring-amber-500/50"
          />
          <span className="text-sm text-white/70">Just Arrived</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            className="w-4 h-4 rounded border-white/20 bg-white/5 text-amber-500 focus:ring-amber-500/50"
          />
          <span className="text-sm text-white/70">Active (Visible)</span>
        </label>
      </div>

      <div className="flex gap-3">
        <Button type="submit" isLoading={isPending}>
          {product ? "Update Product" : "Create Product"}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => router.back()}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
