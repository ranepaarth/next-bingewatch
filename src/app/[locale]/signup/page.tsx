import Logo from "@/components/logo";
import MultiStepSignUpForm from "@/components/signup-page/multi-step-signup-form";
import React from "react";

const SignUpPage = () => {
  return (
    <section className="bg-white w-full h-screen">
      <div className="px-20 py-10 border border-b flex items-center justify-between">
        <Logo />
        <button className="text-neutral-800 font-bold text-xl">Sign In</button>
      </div>
      <div className="w-full max-w-screen-xl mx-auto mt-14 text-neutral-800">
        <div className="w-full flex items-center justify-center">
          <MultiStepSignUpForm />
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
