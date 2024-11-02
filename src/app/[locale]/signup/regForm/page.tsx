import RegForm from "@/components/signup-page/reg-form";
import { nextConstants } from "@/constants";
import {
  DecodedTokenType,
  getUserEmailFromToken,
} from "@/server-actions/get-user-email-from-token";
import React from "react";

const { BINGEWATCH_SECURE_COOKIE } = nextConstants;

const RegFormPage = async () => {
  const decodedToken = (await getUserEmailFromToken(
    BINGEWATCH_SECURE_COOKIE
  )) as DecodedTokenType;

  // const { email, isNewUser, isLoggedIn } = decodedToken;
  console.log({ decodedToken }, "page/regForm");
  return (
    <RegForm
      email={decodedToken?.email as string}
      isNewUser={JSON.parse(decodedToken?.isNewUser ?? "true")}
      isLoggedIn={decodedToken?.isLoggedIn}
    />
  );
};

export default RegFormPage;
