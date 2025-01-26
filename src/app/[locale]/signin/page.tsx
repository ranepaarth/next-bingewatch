import Logo from "@/components/logo";
import SignInForm from "@/components/signin-page/signin-form";
import { nextConstants } from "@/constants";
import {
  DecodedTokenType,
  getUserInfoFromToken,
} from "@/server-actions/get-user-info-from-token";
import React from "react";

const { BINGEWATCH_SECURE_COOKIE } = nextConstants;
const SignInPage = async () => {
  const decodedToken = (await getUserInfoFromToken(
    BINGEWATCH_SECURE_COOKIE
  )) as DecodedTokenType;
  return (
    <div className="relative w-full md:bg-[url(/images/hero-image.jpg)] bg-black h-dvh lg:h-dvh bg-cover bg-no-repeat flex items-center justify-center">
      <div className="absolute bg-gradient-radial from-black/50 to-black/90 z-10 inset-0"></div>
      <div className="z-20 w-full max-w-screen-xl mx-auto h-full flex flex-col">
        <div className="p-4 md:py-8 flex items-start">
          <Logo />
        </div>
        <div className="w-full flex-grow flex justify-center items-center p-2">
          <SignInForm email={decodedToken?.email as string} />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
