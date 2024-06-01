import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const GetStartedInput = () => {
  const t = useTranslations("Home.heroSection");
  return (
    <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-2 w-full justify-center">
      <input
        type="text"
        className="h-12 rounded-md bg-blue-300/20 px-4 border border-neutral-600 min-w-[400px] max-w-[500px] flex-grow"
        placeholder={t("email-placeholder")}
      />
      <button className="bg-primary-600 text- font-bold rounded-md flex items-center py-2 px-4 hover:bg-primary-700  transition-colors duration-200 ease-in-out">
        {t("get-started-btn")}
        <ChevronRight className="w-7 h-7 ml-2" />
      </button>
    </div>
  );
};

export default GetStartedInput;
