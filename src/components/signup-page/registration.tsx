import React from "react";
import NextButton from "./next-button";
import StepCount from "./step-count";

const Registration = () => {
  return (
    <>
      <div className="flex flex-col gap-4 max-w-[450px] text-center">
        <StepCount currentStep={1} totalSteps={4} />
        <h3 className="text-4xl font-bold">Finish Setting up your account</h3>
        <p className="px-4 md:px-20 text-lg">
          Netflix is personalised for you. Create a password to watch on any
          device at any time.
        </p>
        <NextButton loading={false}>Next</NextButton>
      </div>
    </>
  );
};

export default Registration;
