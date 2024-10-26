"use client";

import useMultiStepForm from "@/hooks/useMultiStepForm";
import React from "react";

const steps = ["first"];

const MultiStepSignUpForm = () => {
  const { activeIndex, isFirstStep, isLastStep, next, previous, activeStep } =
    useMultiStepForm(steps);

  return (
    <div className="flex items-center gap-4">
      {!isLastStep && <button onClick={next}>Next</button>}
      <div>{activeStep}</div>
      {!isFirstStep && <button onClick={previous}>Back</button>}
    </div>
  );
};

export default MultiStepSignUpForm;
