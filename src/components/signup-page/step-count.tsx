import React from "react";

type StepCountProps = {
  currentStep: number;
  totalSteps: number;
};

const StepCount = ({ currentStep, totalSteps }: StepCountProps) => {
  return (
    <p className="uppercase text-xs">
      Step <span className="font-semibold">{currentStep}</span> of{" "}
      <span className="font-semibold">{totalSteps}</span>
    </p>
  );
};

export default StepCount;
