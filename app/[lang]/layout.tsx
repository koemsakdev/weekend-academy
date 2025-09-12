import { ReactNode } from "react";
import { getDictionary } from "@/get-dictionaries";
import { DictionaryProvider } from "@/lib/dictionary-context";
import { Locale } from "@/i18n-config";

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return (
    <DictionaryProvider lang={lang as Locale} dict={dict}>
      {children}
    </DictionaryProvider>
  );
}
