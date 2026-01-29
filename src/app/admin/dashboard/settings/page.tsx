export const dynamic = "force-dynamic";

import { getSiteConfig } from "@/lib/actions/site-config.actions";
import { SettingsForm } from "@/components/admin/settings-form";

export const metadata = {
  title: "Settings",
};

export default async function SettingsPage() {
  const config = await getSiteConfig();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-sm text-white/50 mt-1">
          Configure your store settings
        </p>
      </div>

      <SettingsForm config={config} />
    </div>
  );
}
