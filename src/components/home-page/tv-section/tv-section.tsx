import { useTranslations } from "next-intl";
import React from "react";
import TvSectionVideo from "./tv-section-video";

const TvSection = () => {
  const t = useTranslations("Home.tvSection");
  return (
    <section className="w-full flex flex-col text-center justify-center bg-black py-20 px-10 gap-8 my-1 items-center lg:flex-row">
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-3xl font-bold lg:text-5xl text-nowrap">
          {t("h3")}
        </h3>
        <p className="text-lg text-pretty lg:text-xl">{t("p")}.</p>
      </div>
      <TvSectionVideo />
    </section>
  );
};

export default TvSection;
