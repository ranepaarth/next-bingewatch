import { useTranslations } from "next-intl";
import React from "react";

const TvSection = () => {
  const t = useTranslations("Home.tvSection");

  return (
    <section className="w-full flex flex-col text-center justify-center bg-black py-20 px-10 gap-6 my-1">
      <h3 className="text-3xl font-bold">{t("h3")}</h3>
      <p className="text-lg text-pretty">{t("p")}</p>
    </section>
  );
};

export default TvSection;
