"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface AdminHeaderProps {
  onMenuToggle?: () => void;
}

export function AdminHeader({ onMenuToggle }: AdminHeaderProps) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-30 h-16 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/10 lg:pl-64">
      <div className="flex items-center justify-between h-full px-4 sm:px-6">
        <div className="flex items-center gap-3">
          {/* Hamburger menu - mobile only */}
          <button
            onClick={onMenuToggle}
            className="lg:hidden text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h2 className="text-sm font-medium text-white/70 lg:hidden">
            Admin Panel
          </h2>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
