"use client";

import { Link, useRouter } from "@/navigation";
import { loginAction } from "@/server-actions/login-action";
import { registerAction } from "@/server-actions/register-action";
import { TriangleAlert } from "lucide-react";
import React, { useRef, useTransition } from "react";
import { useForm } from "react-hook-form";
import Input from "../reusable/custom-input";
import NextButton from "./next-button";
import StepCount from "./step-count";

type RegFormTypes = {
  email: string;
  isNewUser: boolean;
  isLoggedIn?: boolean;
};

const RegForm = ({ email, isNewUser, isLoggedIn }: RegFormTypes) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    trigger,
  } = useForm();
  const [loading, startTransition] = useTransition();
  const userExistRef = useRef<boolean>(null);
  const router = useRouter();

  // console.log(errors, "REGFORM");
  // console.log(dirtyFields, "DIRTYFIELDS");
  console.log({ email, isNewUser, isLoggedIn });

  const onSubmit = (data: any) => {
    console.log(data);
    // return
    if (isNewUser) {
      startTransition(() => {
        console.log("REGISTER");
        registerAction(data);
      });
      return;
    }

    startTransition(() => {
      console.log("LOGIN");
      loginAction({ email, password: data?.password });
      router.push("/signup/verifyemail");
      // console.log(result);
      return;
    });
  };

  console.log({ loading });

  if (isLoggedIn) {
    return (
      <div className="max-w-[500px] flex flex-col gap-1 w-full">
        <StepCount currentStep={1} totalSteps={4} />
        <h3 className="text-2xl md:text-3xl font-bold leading-snug">
          Account Created
        </h3>
        <p className="text-sm md:text-base font-light">
          Use this email to access your account
        </p>
        <span className="font-bold text-lg my-6">{email}</span>
        <NextButton
          loading={false}
          onClick={() => router.push("/signup/verifyemail")}
        >
          Next
        </NextButton>
      </div>
    );
  }

  return (
    <div className="max-w-[450px] flex flex-col gap-1">
      {userExistRef?.current ? (
        <div className="text-black mb-4 bg-amber-500 py-2 px-4 rounded-sm text-base md:text-base flex items-center gap-4">
          <div>
            <TriangleAlert className="w-6 h-6" />
          </div>
          <div>
            <span className="font-semibold">
              Looks like, that account already exists.
            </span>
            <span className="font-light">
              <Link href={"/signin"} className="underline px-1">
                Sign into that account
              </Link>
              or try using a different email.
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
      <StepCount currentStep={1} totalSteps={4} />
      <h3 className="text-2xl md:text-3xl font-bold leading-snug">
        Create a password to start your membership
      </h3>
      <p className="text-base md:text-lg font-light">
        Just a few more steps and you&apos;re done!
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 py-4"
      >
        {isNewUser ? (
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
            autoFocus={!email}
          />
        ) : (
          <div className="flex flex-col">
            <p>Email</p> <p className="font-semibold">{email}</p>
          </div>
        )}
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
          autoFocus={!!email}
        />
        <NextButton loading={loading} type="submit">
          Next
        </NextButton>
      </form>
    </div>
  );
};

export default RegForm;
