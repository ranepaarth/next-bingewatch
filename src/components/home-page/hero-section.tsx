import { useTranslations } from "next-intl";
import React from "react";
import GetStartedInput from "../shared/get-started-input";

const HeroSection = () => {
  const t = useTranslations("Home.heroSection");
  return (
    <article className="h-full flex items-center justify-center flex-col gap-6 z-20 text-center">
      <h3 className="text-3xl font-bold lg:text-5xl">{t("h3")} </h3>
      <p className="text-lg">{t("p1")}</p>
      <p className="text-lg min-w-11/12 max-w-full">{t("p2")}</p>
      <GetStartedInput />
    </article>
  );
};

export default HeroSection;
