import RegForm from "@/components/signup-page/reg-form";
import { nextConstants } from "@/constants";
import {
  DecodedTokenType,
  getUserInfoFromToken,
} from "@/server-actions/get-user-info-from-token";
import React from "react";

const { BINGEWATCH_SECURE_COOKIE } = nextConstants;

export const dynamic = "force-dynamic";
const RegFormPage = async () => {
  const decodedToken = (await getUserInfoFromToken(
    BINGEWATCH_SECURE_COOKIE
  )) as DecodedTokenType;

  // const { email, isNewUser, isLoggedIn } = decodedToken;

  console.log("-------------");
  console.log({ decodedToken }, "page/regForm");
  console.log("-------------");
  return (
    <RegForm
      email={decodedToken?.email as string}
      isNewUser={JSON.parse(decodedToken?.isNewUser ?? "true")}
      isLoggedIn={decodedToken?.isLoggedIn as boolean}
    />
  );
};

export default RegFormPage;
