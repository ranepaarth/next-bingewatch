import Logo from "@/components/logo";
import LogoutButton from "@/components/signup-page/logout-button";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React from "react";
import LanguageSelect from "./language-select";

type HomeHeaderType = {
  isLoggedIn: boolean;
};

const HomeHeader: React.FC<HomeHeaderType> = ({ isLoggedIn }) => {
  const t = useTranslations("Home.header");

  return (
    <header className="flex justify-between w-full items-center z-20 px-4 py-4">
      <Logo />
      <div className="flex gap-4 text-sm">
        <LanguageSelect />
        {isLoggedIn ? (
          <LogoutButton isLoggedIn={isLoggedIn} />
        ) : (
          <Link
            href={"/signin"}
            className="py-1 px-4 bg-primary-600 rounded-md text-white font-semibold hover:bg-primary-700  transition-colors duration-200 ease-in-out flex justify-center items-center text-nowrap"
          >
            <button className="">{t("signIn-btn")}</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default HomeHeader;
