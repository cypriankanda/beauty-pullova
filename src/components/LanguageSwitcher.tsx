import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { LANGUAGE_OPTIONS, type SupportedLanguageCode } from "@/i18n/languages";

type LanguageSwitcherProps = {
  className?: string;
  triggerClassName?: string;
};

const LanguageSwitcher = ({
  className,
  triggerClassName,
}: LanguageSwitcherProps) => {
  const { i18n, t } = useTranslation();
  const raw = (i18n.resolvedLanguage ?? "en").split("-")[0] ?? "en";
  const value: SupportedLanguageCode = LANGUAGE_OPTIONS.some(
    (o) => o.code === raw,
  )
    ? (raw as SupportedLanguageCode)
    : "en";

  return (
    <div className={cn(className)}>
      <Select
        value={value}
        onValueChange={(code) => void i18n.changeLanguage(code)}
      >
        <SelectTrigger
          className={cn(
            "h-9 w-[132px] border-gray-200 bg-white/90 text-sm md:w-[140px]",
            triggerClassName,
          )}
          aria-label={t("common.language")}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {LANGUAGE_OPTIONS.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
