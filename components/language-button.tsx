"use client";

import { usePathname, useRouter } from "next/navigation";
import { type Locale } from "@/i18n-config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

const languageFlags = {
  en: "https://flagcdn.com/w20/us.png",
  km: "https://flagcdn.com/w20/kh.png",
};

export default function LanguageButton() {
  const router = useRouter();
  const pathname = usePathname();

  const [language, setLanguage] = useState<Locale>("km");

  // Sync language with current route on mount & when pathname changes
  useEffect(() => {
    if (!pathname) return;
    const segments = pathname.split("/");
    const currentLocale = segments[1] as Locale;
    if (currentLocale && ["en", "km"].includes(currentLocale)) {
      setLanguage(currentLocale);
    }
  }, [pathname]);

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || "/";
  };

  const handleChange = (value: string) => {
    const newLocale = value as Locale;
    setLanguage(newLocale);
    router.push(redirectedPathname(newLocale));
  };

  return (
    <Select onValueChange={handleChange} value={language}>
      <SelectTrigger className="w-[150px] rounded-xs shadow-none focus:shadow-none focus-visible:ring-0 focus-visible:outline-0">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en" className="flex items-center gap-2 cursor-pointer">
          <img src={languageFlags.en} alt="English" className="w-6 h-4" />
          English
        </SelectItem>
        <SelectItem value="km" className="flex items-center gap-2 cursor-pointer">
          <img src={languageFlags.km} alt="Khmer" className="w-6 h-4" />
          ខ្មែរ
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
