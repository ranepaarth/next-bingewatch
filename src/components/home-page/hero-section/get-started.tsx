import { getTranslations } from "next-intl/server";
import React from "react";
import GetStartedForm from "./get-started-form";

export const dynamic = "force-dynamic";
const GetStarted = async ({ email, isLoggedIn }: GetStartedData) => {
  const t = await getTranslations("Home.heroSection");

  return (
    <div className="mt-6">
      <GetStartedForm
        placeholder={t("email-placeholder")}
        buttonLabel={t("get-started-btn")}
        email={email}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};

export default GetStarted;
