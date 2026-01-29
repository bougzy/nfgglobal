export const dynamic = "force-dynamic";

import { getAdminStats } from "@/lib/actions/admin.actions";
import { getSiteConfig } from "@/lib/actions/site-config.actions";
import { StatsCards } from "@/components/admin/stats-cards";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const [stats, config] = await Promise.all([
    getAdminStats(),
    getSiteConfig(),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-white/50 mt-1">
          Overview of your store performance
        </p>
      </div>

      <StatsCards stats={stats} currencySymbol={config.currencySymbol} />
    </div>
  );
}
