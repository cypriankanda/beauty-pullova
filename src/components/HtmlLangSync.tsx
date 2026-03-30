import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/**
 * Keeps <html lang="…"> in sync with the active i18n language (accessibility + SEO).
 */
const HtmlLangSync = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const base = (i18n.resolvedLanguage ?? "en").split("-")[0] ?? "en";
    document.documentElement.lang = base;
  }, [i18n.resolvedLanguage]);

  return null;
};

export default HtmlLangSync;
