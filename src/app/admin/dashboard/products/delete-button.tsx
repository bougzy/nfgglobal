"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { deleteProduct } from "@/lib/actions/product.actions";

interface DeleteProductButtonProps {
  productId: string;
  productName: string;
}

export function DeleteProductButton({
  productId,
  productName,
}: DeleteProductButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showConfirm, setShowConfirm] = useState(false);

  function handleDelete() {
    startTransition(async () => {
      await deleteProduct(productId);
      setShowConfirm(false);
      router.refresh();
    });
  }

  return (
    <>
      <Button
        variant="danger"
        size="sm"
        onClick={() => setShowConfirm(true)}
      >
        Delete
      </Button>

      <Modal
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        title="Delete Product"
      >
        <p className="text-sm text-white/70 mb-6">
          Are you sure you want to delete &quot;{productName}&quot;? This cannot be
          undone.
        </p>
        <div className="flex gap-3 justify-end">
          <Button variant="ghost" onClick={() => setShowConfirm(false)}>
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
    </>
  );
}
