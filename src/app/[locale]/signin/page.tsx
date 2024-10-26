import Logo from "@/components/logo";
import SignInForm from "@/components/signin-page/signin-form";
import React from "react";

const SignInPage = () => {
  return (
    <div className="relative w-full bg-[url(/images/hero-image.jpg)]  h-dvh lg:h-dvh bg-cover bg-no-repeat flex items-center justify-center">
      <div className="absolute bg-gradient-radial from-black/50 to-black/70 z-10 inset-0"></div>
      <div className="z-20 w-full max-w-screen-xl mx-auto h-full flex flex-col">
        <div className="p-4 md:py-8 flex items-start">
          <Logo />
        </div>
        <div className="w-full flex-grow flex justify-center items-center p-8">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
