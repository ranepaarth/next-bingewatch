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
import SignUpForm from "@/components/auth/signup/signup-form";
import Logo from "@/components/logo";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import React from "react";

const SignUpPage = () => {
  const localeActive = useLocale() as Locales;
  return (
    <main className="bg-white text-neutral-800 min-h-screen flex flex-col">
      <header className="flex w-full justify-between py-3 px-4 sm:p-5 md:px-8 md:py-6 border-b items-center">
        <div className="w-28 sm:w-40 md:w-52">
          <Logo />
        </div>
        <Link href={"/signin"} locale={localeActive}>
          <span className="text-base sm:text-lg font-semibold text-neutral-700 hover:underline">
            Sign In
          </span>
        </Link>
      </header>
      <SignUpForm />
    </main>
  );
};

export default SignUpPage;
