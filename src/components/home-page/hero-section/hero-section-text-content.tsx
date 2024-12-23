import { useTranslations } from "next-intl";
import React from "react";

const HeroSectionTextContent = () => {
  const t = useTranslations("Home.heroSection");

  return (
    <div className="gap-5 flex flex-col px-4">
      <h3 className="text-3xl font-bold lg:text-5xl">{t("h3")} </h3>
      <p className="text-lg lg:text-2xl">{t("p1")}</p>
      <p className="text-lg lg:text-2xl min-w-11/12 max-w-full">{t("p2")}</p>
    </div>
  );
};

export default HeroSectionTextContent;
