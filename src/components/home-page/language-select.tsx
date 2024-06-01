"use client";

import { useLocale, } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

const LanguageSelect = () => {
  const router = useRouter();
  const handelLocaleChange = (locale: string) => {
    router.replace(`/${locale}`);
  };
  const localeActive = useLocale();

  return (
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
  );
};

export default LanguageSelect;
