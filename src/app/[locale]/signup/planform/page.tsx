import PlanList from "@/components/planform/plan-list";
import StepCount from "@/components/signup-page/step-count";
import { nextConstants } from "@/constants";
import React from "react";

const { API_URL } = nextConstants;
const PlanFormPage = async () => {
  let plans;
  const request = await fetch(`${API_URL}/plans`, {
    headers: {
      Accept: "application/json",
    },
  });

  if (request.status) {
    const response = await request.json();
    plans = response?.data;
  }

  console.log("PLANS: ", { plans });

  return (
    <section className="w-full max-w-screen-lg flex flex-col gap-2 items-start h-3/5 mb-4">
      <StepCount currentStep={3} totalSteps={4} />
      <h2 className="max-sm:text-3xl max-sm:font-bold text-4xl font-medium text-neutral-700 mb-4">
        Choose the plan that&apos;s right for you
      </h2>
      <PlanList plans={plans} />
    </section>
  );
};

export default PlanFormPage;
