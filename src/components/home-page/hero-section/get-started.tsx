import { getUserEmailFromToken } from "@/server-actions/get-user-email-from-token";
import { useTranslations } from "next-intl";
import React from "react";
import GetStartedForm from "./get-started-form";

const GetStarted = async () => {
  const t = useTranslations("Home.heroSection");

  const decodedToken = await getUserEmailFromToken();

  return (
    <div className="mt-6">
      <GetStartedForm
        placeholder={t("email-placeholder")}
        buttonLabel={t("get-started-btn")}
        email={decodedToken?.email as string}
      />
    </div>
  );
};

export default GetStarted;
