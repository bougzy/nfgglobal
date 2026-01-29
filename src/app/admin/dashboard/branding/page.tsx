export const dynamic = "force-dynamic";

import { getSiteConfig } from "@/lib/actions/site-config.actions";
import { BrandingForm } from "@/components/admin/branding-form";

export const metadata = {
  title: "Branding",
};

export default async function BrandingPage() {
  const config = await getSiteConfig();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Branding</h1>
        <p className="text-sm text-white/50 mt-1">
          Customize your store appearance
        </p>
      </div>

      <BrandingForm config={config} />
    </div>
  );
}
