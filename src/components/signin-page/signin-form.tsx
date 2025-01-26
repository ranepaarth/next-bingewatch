"use client";

import Link from "next/link";
import React, { FC, useTransition } from "react";
import { useForm } from "react-hook-form";
import ButtonPrimary from "../reusable/button-primary";
import Input from "../reusable/custom-input";
import { loginAction } from "@/server-actions/login-action";
import { useRouter } from "@/navigation";

type SignInFormProps = {
  email: string;
};

const SignInForm: FC<SignInFormProps> = ({ email }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    trigger,
  } = useForm();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSignIn = (data: any) => {
    console.log("SIGN IN FORM", { data });
    startTransition(async () => {
      console.log("LOGIN");
      const result = await loginAction({ email, password: data?.password });
      if (!result.success) return;
      router.push("/profiles");
      console.log("redirecting to profiles");
      return;
    });
  };

  return (
    <div className="bg-black/65 w-full max-w-[450px] py-8 px-5 rounded-sm">
      <p className="text-white font-semibold text-3xl">Sign In</p>
      <div className="py-8">
        <form
          action=""
          className="flex gap-4 flex-col"
          onSubmit={handleSubmit(handleSignIn)}
        >
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
              value: email,
            })}
            errorMessage={errors?.email?.message as string}
            isDirty={!!dirtyFields?.email}
          />
          <Input
            label="Enter your password"
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
            autoFocus={!!email}
          />
          <ButtonPrimary
            type="submit"
            disabled={isPending}
            className="disabled:bg-primary-800"
          >
            Sign In
          </ButtonPrimary>
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
