import { useTranslations } from "next-intl";
import React from "react";
import GetStarted from "../hero-section/get-started";
import SingleFaqQuestion from "./single-faq-question";

type faqType = {
  id: number;
  question: string;
  answer: string[];
};

interface FaqSectionType extends GetStartedData {}

const FaqSection = ({ email, isLoggedIn }: FaqSectionType) => {
  const t = useTranslations("Home.faqSection");

  return (
    <section className="w-full flex flex-col text-center justify-center bg-black py-16 px-10 gap-6 ">
      <h3 className="text-3xl font-bold py-4">{t("h3")}</h3>
      <div className="w-full flex flex-col gap-4 mx-auto max-w-screen-md">
        {t.raw("faq").map((faq: faqType, index: number) => {
          return (
            <SingleFaqQuestion
              question={faq.question}
              answers={faq.answer}
              key={index}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <GetStarted email={email} isLoggedIn={isLoggedIn} />
      </div>
    </section>
  );
};

export default FaqSection;
