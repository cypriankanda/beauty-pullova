/** UI language codes supported by the app (bundled locales). */
export const SUPPORTED_LANGUAGE_CODES = ["en", "fr", "es", "it"] as const;
export type SupportedLanguageCode = (typeof SUPPORTED_LANGUAGE_CODES)[number];

export const LANGUAGE_OPTIONS: { code: SupportedLanguageCode; label: string }[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
];
