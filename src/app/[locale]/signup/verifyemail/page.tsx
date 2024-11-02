import { nextConstants } from "@/constants";
import { getUserEmailFromToken } from "@/server-actions/get-user-email-from-token";
import React from "react";

const { BINGEWATCH_SECURE_COOKIE } = nextConstants;
const VerifyEmailPage = async () => {
  const decodedToken = await getUserEmailFromToken(BINGEWATCH_SECURE_COOKIE);

  return (
    <div>
      <p>{decodedToken?.email}</p>
      <p>{`${decodedToken?.isLoggedIn}`}</p>
    </div>
  );
};

export default VerifyEmailPage;
