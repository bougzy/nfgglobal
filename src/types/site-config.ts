export interface ITheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export interface ISiteConfig {
  _id: string;
  storeName: string;
  logo: string;
  whatsappNumber: string;
  currencyCode: string;
  currencySymbol: string;
  heroTitle: string;
  heroSubtitle: string;
  theme: ITheme;
}

export type SiteConfigFormData = Omit<ISiteConfig, "_id">;
