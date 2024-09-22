import React from "react";
import NextButton from "./next-button";
import Input from "../reusable/custom-input";
import StepCount from "./step-count";

const RegForm = () => {
  return (
    <>
      <div className="max-w-[450px] flex flex-col gap-1">
        <StepCount currentStep={1} totalSteps={4} />
        <h3 className="text-3xl font-bold leading-snug">
          Create a password to start your membership
        </h3>
        <p className="text-lg font-light">
          Just a few more steps and you&apos;re done!
        </p>
        <form action="" className="flex flex-col gap-4 py-4">
          <Input
            label="Email"
            type="email"
            className="focus-within:border-blue-500"
          />
          <Input
            label="Add a password"
            type="password"
            className="focus-within:border-blue-500"
          />
        </form>
        <NextButton href="/signup/regForm" />
      </div>
    </>
  );
};

export default RegForm;
