"use client";

import { createContext, ReactNode } from "react";
import { ISiteConfig } from "@/types/site-config";
import { SITE_DEFAULTS } from "@/lib/constants";

const defaultConfig: ISiteConfig = {
  _id: "",
  storeName: SITE_DEFAULTS.storeName,
  logo: "",
  whatsappNumber: SITE_DEFAULTS.whatsappNumber,
  currencyCode: SITE_DEFAULTS.currencyCode,
  currencySymbol: SITE_DEFAULTS.currencySymbol,
  heroTitle: SITE_DEFAULTS.heroTitle,
  heroSubtitle: SITE_DEFAULTS.heroSubtitle,
  theme: SITE_DEFAULTS.theme,
};

export const SiteConfigContext = createContext<ISiteConfig>(defaultConfig);

export function SiteConfigProvider({
  initialConfig,
  children,
}: {
  initialConfig: ISiteConfig | null;
  children: ReactNode;
}) {
  return (
    <SiteConfigContext.Provider value={initialConfig || defaultConfig}>
      {children}
    </SiteConfigContext.Provider>
  );
}
