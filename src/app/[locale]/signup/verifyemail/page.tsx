import { nextConstants } from "@/constants";
import {
  DecodedTokenType,
  getUserInfoFromToken,
} from "@/server-actions/get-user-info-from-token";
import React from "react";

export const dynamic = "force-dynamic";
const { BINGEWATCH_SECURE_COOKIE } = nextConstants;
const VerifyEmailPage = async () => {
  const decodedToken = (await getUserInfoFromToken(
    BINGEWATCH_SECURE_COOKIE
  )) as DecodedTokenType;

  return (
    <div>
      <p>email: {decodedToken?.email}</p>
      <p>isLoggedIn: {`${decodedToken?.isLoggedIn}`}</p>
    </div>
  );
};

export default VerifyEmailPage;
