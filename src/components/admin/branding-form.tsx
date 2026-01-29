"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateSiteConfig } from "@/lib/actions/site-config.actions";
import { ISiteConfig } from "@/types/site-config";

interface BrandingFormProps {
  config: ISiteConfig;
}

export function BrandingForm({ config }: BrandingFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [logo, setLogo] = useState(config.logo);
  const [primaryColor, setPrimaryColor] = useState(
    config.theme.primaryColor
  );
  const [secondaryColor, setSecondaryColor] = useState(
    config.theme.secondaryColor
  );
  const [accentColor, setAccentColor] = useState(config.theme.accentColor);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setMessage("");

    startTransition(async () => {
      try {
        const result = await updateSiteConfig({
          logo,
          theme: {
            primaryColor,
            secondaryColor,
            accentColor,
          },
        });

        if (!result.success) {
          setError(result.error || "Failed to update branding");
          return;
        }

        setMessage("Branding updated successfully");
        router.refresh();
      } catch {
        setError("An error occurred");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
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

      <div className="space-y-3">
        <Input
          id="logo"
          label="Logo URL"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
          placeholder="https://example.com/logo.png"
        />
        {logo && (
          <div className="relative w-32 h-32 rounded-lg overflow-hidden bg-white/5 border border-white/10">
            <Image
              src={logo}
              alt="Logo preview"
              fill
              className="object-contain p-2"
              sizes="128px"
            />
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-white/70">Theme Colors</h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-white/60">Primary</label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-10 h-10 rounded cursor-pointer bg-transparent border-0"
              />
              <Input
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-white/60">Secondary</label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="w-10 h-10 rounded cursor-pointer bg-transparent border-0"
              />
              <Input
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-white/60">Accent</label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="w-10 h-10 rounded cursor-pointer bg-transparent border-0"
              />
              <Input
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="flex-1"
              />
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" isLoading={isPending}>
        Save Branding
      </Button>
    </form>
  );
}
