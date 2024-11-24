"use client";

import MediumScreenPlanCard from "@/components/planform/medium-screen-plan-card";
import React, { useState } from "react";
import NextButton from "../signup-page/next-button";
import { useRouter } from "@/navigation";
import SmallScreenPlanCard from "./small-screen-plan-card";
import PlanDetails from "./plan-details";

const PlanList = ({ plans }: { plans: any }) => {
  const router = useRouter();

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const handleSelectPlan = (plan: any) => {
    setSelectedPlan(plan);
  };

  return (
    <section className="w-full flex flex-col items-center gap-4 h-full">
      {/* ----------For screens > sm --------------- */}
      <div className="w-full max-sm:hidden flex items-center justify-between gap-4">
        {plans.map((plan: any) => (
          <React.Fragment key={plan?.id}>
            <MediumScreenPlanCard
              plan={plan}
              selectedPlan={selectedPlan}
              handleSelectPlan={handleSelectPlan}
            />
          </React.Fragment>
        ))}
      </div>

      {/* ----------For screens < sm --------------- */}
      <>
        <div className="sm:hidden w-full grid grid-cols-3 justify-between gap-4">
          {plans.map((plan: any) => (
            <React.Fragment key={plan?.id}>
              <SmallScreenPlanCard
                plan={plan}
                selectedPlan={selectedPlan}
                handleSelectPlan={handleSelectPlan}
              />
            </React.Fragment>
          ))}
        </div>
        {selectedPlan && (
          <div className="w-full sm:hidden mt-8">
            <PlanDetails plan={selectedPlan} />
          </div>
        )}
      </>

      <div className="w-full sm:w-2/4 mt-8">
        <NextButton
          loading={false}
          onClick={() => {
            router.push("/signup/checkout");
          }}
        >
          Next
        </NextButton>
      </div>
    </section>
  );
};

export default PlanList;
