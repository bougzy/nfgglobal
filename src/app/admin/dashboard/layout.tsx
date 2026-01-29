import { AdminSidebar } from "@/components/layout/admin-sidebar";
import { AdminHeader } from "@/components/layout/admin-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <AdminSidebar />
      <AdminHeader />
      <main className="lg:pl-64 pt-4">
        <div className="px-4 sm:px-6 lg:px-8 pb-8">{children}</div>
      </main>
    </div>
  );
}
