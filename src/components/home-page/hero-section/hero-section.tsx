import { useTranslations } from "next-intl";
import React from "react";
import GetStarted from "./get-started";
import HeroSectionTextContent from "./hero-section-text-content";

interface HeroSectionType extends GetStartedData {}

const HeroSection = ({ email, isLoggedIn }: HeroSectionType) => {
  return (
    <article className="h-full flex items-center justify-center flex-col gap-6 z-20 text-center p-3 mt-10 px-4">
      <HeroSectionTextContent />
      <GetStarted email={email} isLoggedIn={isLoggedIn} />
    </article>
  );
};

export default HeroSection;
