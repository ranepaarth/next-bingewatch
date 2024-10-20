"use client";

import React, { FormEvent } from "react";
import Input from "../reusable/custom-input";
import ButtonPrimary from "../reusable/button-primary";
import Link from "next/link";

const SignInForm = () => {
  const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-black/65 w-full max-w-[450px] py-8 px-14 rounded-sm">
      <p className="text-white font-semibold text-3xl">Sign In</p>
      <div className="py-8">
        <form action="" className="flex gap-4 flex-col" onSubmit={handleSignIn}>
          <Input
            label="Email or mobile number"
            type={"text"}
            className={"focus-within:border-white bg-neutral-700/20"}
            autoFocus
          />
          <Input
            label="Password"
            type={"password"}
            className={"focus-within:border-white bg-neutral-700/20"}
          />
          <ButtonPrimary text="Sign In" type="submit" />
        </form>
        <p className="text-center text-xl text-neutral-400 py-4">OR</p>
        <button className="bg-neutral-600/70 w-full py-2 rounded-sm hover:bg-neutral-700/70 transition-colors duration-150 ease-in-out">
          Use a sign-in code
        </button>
        <p className="text-center py-4">
          <Link
            href={"/forgot-password"}
            className="hover:underline hover:text-neutral-400"
          >
            Forgot Password?
          </Link>
        </p>
        <p className="text-neutral-500 font-light">
          New to Bingewatch?
          <Link href={"/"} className="text-white font-semibold hover:underline">
            {" "}
            Sign up now
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
