import VerifyEmailComponent from "@/components/verifyEmail/verify-email";
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

  return <VerifyEmailComponent email={decodedToken.email as string} />;
};

export default VerifyEmailPage;
