"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateSiteConfig } from "@/lib/actions/site-config.actions";
import { changeAdminPassword } from "@/lib/actions/admin.actions";
import { ISiteConfig } from "@/types/site-config";
import { formatCurrency } from "@/lib/utils/format-currency";

interface SettingsFormProps {
  config: ISiteConfig;
}

export function SettingsForm({ config }: SettingsFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [storeName, setStoreName] = useState(config.storeName);
  const [whatsappNumber, setWhatsappNumber] = useState(config.whatsappNumber);
  const [currencyCode, setCurrencyCode] = useState(config.currencyCode);
  const [currencySymbol, setCurrencySymbol] = useState(config.currencySymbol);
  const [heroTitle, setHeroTitle] = useState(config.heroTitle);
  const [heroSubtitle, setHeroSubtitle] = useState(config.heroSubtitle);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  function handleSaveConfig(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setMessage("");

    startTransition(async () => {
      try {
        const result = await updateSiteConfig({
          storeName,
          whatsappNumber,
          currencyCode,
          currencySymbol,
          heroTitle,
          heroSubtitle,
        });

        if (!result.success) {
          setError(result.error || "Failed to update settings");
          return;
        }

        setMessage("Settings updated successfully");
        router.refresh();
      } catch {
        setError("An error occurred");
      }
    });
  }

  function handleChangePassword(e: React.FormEvent) {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess("");

    startTransition(async () => {
      try {
        const result = await changeAdminPassword({
          currentPassword,
          newPassword,
        });

        if (!result.success) {
          setPasswordError(result.error || "Failed to change password");
          return;
        }

        setPasswordSuccess("Password changed successfully");
        setCurrentPassword("");
        setNewPassword("");
      } catch {
        setPasswordError("An error occurred");
      }
    });
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <form onSubmit={handleSaveConfig} className="space-y-6">
        <h3 className="text-lg font-semibold text-white">Store Settings</h3>

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

        <Input
          id="storeName"
          label="Store Name"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          required
        />

        <Input
          id="whatsappNumber"
          label="WhatsApp Number (with country code)"
          value={whatsappNumber}
          onChange={(e) => setWhatsappNumber(e.target.value)}
          placeholder="2348012345678"
          required
        />

        <Input
          id="heroTitle"
          label="Hero Title"
          value={heroTitle}
          onChange={(e) => setHeroTitle(e.target.value)}
        />

        <Input
          id="heroSubtitle"
          label="Hero Subtitle"
          value={heroSubtitle}
          onChange={(e) => setHeroSubtitle(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            id="currencyCode"
            label="Currency Code"
            value={currencyCode}
            onChange={(e) => setCurrencyCode(e.target.value.toUpperCase())}
            placeholder="NGN"
            required
          />
          <Input
            id="currencySymbol"
            label="Currency Symbol"
            value={currencySymbol}
            onChange={(e) => setCurrencySymbol(e.target.value)}
            placeholder="₦"
            required
          />
        </div>

        <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white/60">
          Preview: {formatCurrency(1250000, currencySymbol)} {currencyCode}
        </div>

        <Button type="submit" isLoading={isPending}>
          Save Settings
        </Button>
      </form>

      <div className="border-t border-white/10 pt-8">
        <form onSubmit={handleChangePassword} className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Change Password</h3>

          {passwordError && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {passwordError}
            </div>
          )}
          {passwordSuccess && (
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
              {passwordSuccess}
            </div>
          )}

          <Input
            id="currentPassword"
            label="Current Password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />

          <Input
            id="newPassword"
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <Button type="submit" variant="secondary" isLoading={isPending}>
            Change Password
          </Button>
        </form>
      </div>
    </div>
  );
}
