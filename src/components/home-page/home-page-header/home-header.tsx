import Logo from "@/components/logo";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React from "react";
import LanguageSelect from "./language-select";

const HomeHeader = () => {
  const t = useTranslations("Home.header");

  return (
    <header className="flex justify-between w-full items-center z-20 px-8 py-4">
      <Logo />
      <div className="flex gap-4 text-sm">
        <LanguageSelect />
        <Link
          href={"/signin"}
          className="py-1 px-4 bg-primary-600 rounded-md text-white font-semibold hover:bg-primary-700  transition-colors duration-200 ease-in-out flex justify-center items-center"
        >
          <button className="">{t("signIn-btn")}</button>
        </Link>
      </div>
    </header>
  );
};

export default HomeHeader;
