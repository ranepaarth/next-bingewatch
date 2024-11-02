"use client";

import Link from "next/link";
import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import ButtonPrimary from "../reusable/button-primary";
import Input from "../reusable/custom-input";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    trigger,
  } = useForm();
  const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-black/65 w-full max-w-[450px] py-8 px-5 rounded-sm">
      <p className="text-white font-semibold text-3xl">Sign In</p>
      <div className="py-8">
        <form action="" className="flex gap-4 flex-col" onSubmit={handleSignIn}>
          <Input
            label="Email"
            type="email"
            // className="focus-within:border-blue-500"
            {...register("email", {
              required: "Email is required",
              minLength: {
                value: 5,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
              onBlur: () => trigger(),
              onChange: () => trigger(),
              shouldUnregister: true,
            })}
            errorMessage={errors?.email?.message as string}
            isDirty={!!dirtyFields?.email}
          />
          <Input
            label="Add a password"
            type="password"
            // className="focus-within:border-blue-500"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long.",
              },
              onBlur: () => trigger(),
              onChange: () => trigger(),
            })}
            errorMessage={errors?.password?.message as string}
            isDirty={!!dirtyFields?.password}
          />
          <ButtonPrimary type="submit">Sign In</ButtonPrimary>
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
        <p className="text-neutral-500 font-light text-sm md:text-base">
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
