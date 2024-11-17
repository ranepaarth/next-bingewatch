"use client";

import { useRouter } from "@/navigation";
import { ShieldCheck } from "lucide-react";
import React, { FC } from "react";
import StepCount from "../signup-page/step-count";

type VerifyEmailComponentType = {
  email: string;
};
const VerifyEmailComponent: FC<VerifyEmailComponentType> = ({ email }) => {
  const router = useRouter();
  const handleSkipButtonClick = () => {
    router.push("/signup/planform");
  };
  return (
    <article className="flex flex-col items-start justify-between md:items-center bg-red w-full gap-6 max-w-lg h-4/5">
      <span className="w-14 aspect-square border-[3px] border-primary-500 rounded-full flex items-center justify-center">
        <ShieldCheck className="w-6 h-6 text-primary-500" />
      </span>
      <div className="flex flex-col gap-6 md:text-center">
        <div>
          <StepCount currentStep={2} totalSteps={4} />
          <h2 className="text-neutral-700 text-3xl font-bold">
            Great, now let us verify your email
          </h2>
        </div>
        <p className="text-neutral-700 text-lg">
          Click the link we sent to{" "}
          <span className="font-semibold">{email}</span> to verify.
        </p>
        <p className="text-neutral-700">
          Verifying your email will improve account security and help you
          receive important Netflix communications.
        </p>
      </div>
      <button
        className="bg-neutral-300 w-full p-2 font-semibold text-2xl hover:bg-neutral-200 transition-colors ease-in-out duration-150 mt-40"
        onClick={handleSkipButtonClick}
      >
        Skip
      </button>
    </article>
  );
};

export default VerifyEmailComponent;
