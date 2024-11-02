import { nextConstants } from "@/constants";
import { getUserEmailFromToken } from "@/server-actions/get-user-email-from-token";
import { useTranslations } from "next-intl";
import React from "react";
import GetStartedForm from "./get-started-form";

const { BINGEWATCH_SECURE_COOKIE } = nextConstants;
const GetStarted = async () => {
  const t = useTranslations("Home.heroSection");

  const decodedToken = await getUserEmailFromToken(BINGEWATCH_SECURE_COOKIE);

  return (
    <div className="mt-6">
      <GetStartedForm
        placeholder={t("email-placeholder")}
        buttonLabel={t("get-started-btn")}
        email={decodedToken?.email as string}
        isLoggedIn={decodedToken?.isLoggedIn as boolean}
      />
    </div>
  );
};

export default GetStarted;
