"use client";

import { useContext } from "react";
import { SiteConfigContext } from "@/context/site-config-context";

export function useSiteConfig() {
  return useContext(SiteConfigContext);
}
