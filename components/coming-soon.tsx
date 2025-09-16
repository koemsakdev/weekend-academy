"use client";

import { useDictionary } from "@/lib/dictionary-context";
import { useState, useEffect } from "react";
export default function ComingSoon() {
  const [isReady, setIsReady] = useState(false);
  const { dict } = useDictionary();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[85vh]">
      <div className="text-center">
        <h1
          className={`text-5xl md:text-7xl font-bold tracking-tight mb-4
          ${isReady ? "fade-in-up" : ""}`}
        >
          {dict.comming_soon.title}
        </h1>
        <p
          className={`text-xl md:text-2xl text-gray-400 max-w-xl mx-auto
          ${isReady ? "fade-in-up-delay" : ""}`}
        >
          {dict.comming_soon.description}
        </p>
      </div>
    </div>
  );
}
