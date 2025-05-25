export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

export type Language = "vi" | "en";
