"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import {
  createCategory,
  updateCategory,
  deleteCategory,
} from "@/lib/actions/category.actions";
import { ICategory } from "@/types/category";

interface CategoryFormProps {
  categories: ICategory[];
}

export function CategoryManager({ categories }: CategoryFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<ICategory | null>(null);

  const [newName, setNewName] = useState("");
  const [newOrder, setNewOrder] = useState("0");

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editOrder, setEditOrder] = useState("");
  const [editActive, setEditActive] = useState(true);

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setMessage("");

    startTransition(async () => {
      const result = await createCategory({
        name: newName,
        order: parseInt(newOrder),
        isActive: true,
      });

      if (!result.success) {
        setError(result.error || "Failed to create category");
        return;
      }

      setNewName("");
      setNewOrder("0");
      setMessage("Category created");
      router.refresh();
    });
  }

  function startEdit(cat: ICategory) {
    setEditingId(cat._id);
    setEditName(cat.name);
    setEditOrder(cat.order.toString());
    setEditActive(cat.isActive);
  }

  function handleUpdate(id: string) {
    setError("");
    setMessage("");

    startTransition(async () => {
      const result = await updateCategory(id, {
        name: editName,
        order: parseInt(editOrder),
        isActive: editActive,
      });

      if (!result.success) {
        setError(result.error || "Failed to update category");
        return;
      }

      setEditingId(null);
      setMessage("Category updated");
      router.refresh();
    });
  }

  function handleDelete() {
    if (!deleteTarget) return;
    setError("");
    setMessage("");

    startTransition(async () => {
      const result = await deleteCategory(deleteTarget._id);

      if (!result.success) {
        setError(result.error || "Failed to delete category");
        setDeleteTarget(null);
        return;
      }

      setDeleteTarget(null);
      setMessage("Category deleted");
      router.refresh();
    });
  }

  return (
    <div className="space-y-6">
      {message && (
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
          {message}
        </div>
      )}
      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      <form
        onSubmit={handleCreate}
        className="flex flex-col sm:flex-row gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
      >
        <Input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New category name"
          className="flex-1"
          required
        />
        <Input
          type="number"
          value={newOrder}
          onChange={(e) => setNewOrder(e.target.value)}
          placeholder="Order"
          className="w-24"
        />
        <Button type="submit" isLoading={isPending} size="md">
          Add
        </Button>
      </form>

      <div className="space-y-2">
        {categories.map((cat) => (
          <div
            key={cat._id}
            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
          >
            {editingId === cat._id ? (
              <>
                <Input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={editOrder}
                  onChange={(e) => setEditOrder(e.target.value)}
                  className="w-20"
                />
                <label className="flex items-center gap-1 text-xs text-white/60 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editActive}
                    onChange={(e) => setEditActive(e.target.checked)}
                    className="w-3.5 h-3.5 rounded"
                  />
                  Active
                </label>
                <Button
                  size="sm"
                  onClick={() => handleUpdate(cat._id)}
                  isLoading={isPending}
                >
                  Save
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <span className="flex-1 text-sm text-white/80">
                  {cat.name}
                </span>
                <span className="text-xs text-white/40">
                  Order: {cat.order}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    cat.isActive
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {cat.isActive ? "Active" : "Inactive"}
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => startEdit(cat)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => setDeleteTarget(cat)}
                >
                  Delete
                </Button>
              </>
            )}
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        title="Delete Category"
      >
        <p className="text-sm text-white/70 mb-6">
          Are you sure you want to delete &quot;{deleteTarget?.name}&quot;? This cannot
          be undone.
        </p>
        <div className="flex gap-3 justify-end">
          <Button variant="ghost" onClick={() => setDeleteTarget(null)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleDelete}
            isLoading={isPending}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
}
