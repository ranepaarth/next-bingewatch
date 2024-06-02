import { useTranslations } from "next-intl";
import React from "react";
import GetStartedForm from "./get-started-form";

const GetStarted = () => {
  const t = useTranslations("Home.heroSection");

  return (
    <div className="mt-6">
      <GetStartedForm
        placeholder={t("email-placeholder")}
        buttonLabel={t("get-started-btn")}
      />
    </div>
  );
};

export default GetStarted;
