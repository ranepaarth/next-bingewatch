"use client";

import { ChevronDown, Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

const LanguageSelect = () => {
  const router = useRouter();
  const handelLocaleChange = (locale: string) => {
    router.replace(`/${locale}`);
  };
  const localeActive = useLocale();

  return (
    <div className="relative border-neutral-500 border bg-neutral-900/70 rounded-md flex  items-center gap-x-2 w-32">
      <Languages className="w-5 h-5 absolute left-2" strokeWidth={2.5} />
      <select
        name="language"
        id="language"
        className="bg-transparent font-semibold appearance-none w-full text-center py-1.5 z-30 cursor-pointer"
        value={localeActive}
        onChange={(e) => handelLocaleChange(e.target.value)}
      >
        <option value="en" className="text-black p-1">
          English
        </option>
        <option value="hi" className="text-black p-1">
          हिन्दी
        </option>
      </select>
      <ChevronDown className="w-4 h-4 absolute right-2" strokeWidth={2.5} />
    </div>
  );
};

export default LanguageSelect;
