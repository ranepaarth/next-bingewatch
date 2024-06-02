import { useTranslations } from "next-intl";
import React from "react";
import GetStarted from "./get-started";

const HeroSection = () => {
  const t = useTranslations("Home.heroSection");
  return (
    <article className="h-full flex items-center justify-center flex-col gap-6 z-20 text-center p-3 mt-10 px-4">
      <h3 className="text-3xl font-bold lg:text-5xl">{t("h3")} </h3>
      <p className="text-lg lg:text-2xl">{t("p1")}</p>
      <p className="text-lg lg:text-2xl min-w-11/12 max-w-full">{t("p2")}</p>
      <GetStarted />
    </article>
  );
};

export default HeroSection;
