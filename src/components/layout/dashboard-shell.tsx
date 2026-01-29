"use client";

import { useState } from "react";
import { AdminSidebar } from "./admin-sidebar";
import { AdminHeader } from "./admin-header";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <AdminSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <AdminHeader onMenuToggle={() => setSidebarOpen((prev) => !prev)} />
      <main className="lg:pl-64 pt-4">
        <div className="px-4 sm:px-6 lg:px-8 pb-8">{children}</div>
      </main>
    </div>
  );
}
