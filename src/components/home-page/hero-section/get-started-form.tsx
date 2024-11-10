"use client";

import { Link, useRouter } from "@/navigation";
import { getStartedAction } from "@/server-actions/get-started-action";
import { ChevronRight, CirclePlus, Loader2 } from "lucide-react";
import React, { useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface GetStartedFormTypes extends GetStartedData {
  placeholder: string;
  buttonLabel: string;
}

const GetStartedForm = ({
  placeholder,
  buttonLabel,
  email,
  isLoggedIn,
}: GetStartedFormTypes) => {
  const [loading, startTransition] = useTransition();
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    trigger,
  } = useForm<FormData>({
    reValidateMode: "onChange",
    defaultValues: {
      email,
    },
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data: any) => {
    console.log(data);
    startTransition(async () => {
      const result = await getStartedAction(data);
      if (result?.success) {
        router.push("/signup/regForm");
      }
    });
  };

  const borderColor = () => {
    if (errors?.email) {
      return "border-red-600"; // Error state
    }
    if (isValid && isDirty) {
      return "border-green-600"; // Valid state after submission or change
    }
    return "border-neutral-600"; // Initial state
  };

  console.log(errors, "useForm validation errors");

  if (isLoggedIn) {
    return (
      <Link
        href={isLoggedIn ? "/signup/planform" : "/"}
        className="capitalize bg-primary-500 py-3 px-6 text-xl font-medium rounded-full hover:bg-primary-700 transition-colors ease-in-out"
        onClick={() => router.push("/signup/planform")}
      >
        Finish Sign-up
      </Link>
    );
  }

  return (
    <form
      className="flex flex-col items-center sm:items-start gap-2 md:flex-row justify-center w-screen max-w-[700px] md:w-[650px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-start md:w-3/4 w-2/3">
        <input
          type="text"
          className={`w-full h-12 rounded-sm bg-neutral-900/85 px-4 border ${borderColor()} flex-grow text-sm outline-offset-2`}
          placeholder={placeholder}
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
          autoComplete="off"
        />
        {errors?.email && (
          <p className="text-sm text-red-600 flex gap-1 items-center p-1">
            <CirclePlus className="rotate-45 w-4 h-4" />
            {errors?.email?.message}
          </p>
        )}
      </div>

      <button
        className="h-12 bg-primary-600 text-2xl font-bold rounded-md py-2 px-4 hover:bg-primary-700  transition-colors duration-200 ease-in-out text-nowrap disabled:bg-primary-500/50 relative md:w-1/4 w-[12.5rem]"
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <span className={`${"z-10 flex items-center justify-center"}`}>
            <Loader2 className={`animate-spin w-6 h-6`} />
          </span>
        ) : (
          <span className={`flex items-center ${loading ? "-z-20" : ""}`}>
            {buttonLabel}
            <ChevronRight className="w-7 h-7 ml-2" />
          </span>
        )}
      </button>
    </form>
  );
};

export default GetStartedForm;
