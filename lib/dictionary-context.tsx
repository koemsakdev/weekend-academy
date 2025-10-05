/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // MUST be here
import { createContext, useContext } from "react";
import { Locale } from "@/i18n-config";

type DictionaryContextType = { lang: Locale; dict: Record<string, any> };
const DictionaryContext = createContext<DictionaryContextType | null>(null);

export function DictionaryProvider({ lang, dict, children }: { lang: Locale; dict: Record<string, any>; children: React.ReactNode }) {
  return <DictionaryContext.Provider value={{ lang, dict }}>{children}</DictionaryContext.Provider>;
}

export function useDictionary() {
  const ctx = useContext(DictionaryContext);
  if (!ctx) throw new Error("useDictionary must be used inside DictionaryProvider");
  return ctx;
}