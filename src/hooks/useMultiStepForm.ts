import React, { useState } from "react";

const useMultiStepForm = (steps: string[]) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const isFirstStep = activeIndex === 0;
  const isLastStep = activeIndex === steps.length - 1;

  const next = () => {
    console.log("next");
    activeIndex <= steps.length - 1
      ? setActiveIndex((prev) => prev + 1)
      : setActiveIndex(steps.length - 1);
  };

  const previous = () => {
    console.log("previous");
    activeIndex <= 0 ? setActiveIndex(0) : setActiveIndex((prev) => prev - 1);
  };

  console.log({
    isLastStep,
    isFirstStep,
    activeStep: steps[activeIndex],
    activeIndex,
  });

  return {
    activeStep: steps[activeIndex],
    activeIndex,
    steps,
    isFirstStep,
    isLastStep,
    next,
    previous,
  };
};

export default useMultiStepForm;
