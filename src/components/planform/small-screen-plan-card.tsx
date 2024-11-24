import React, { FC } from "react";
import { Check } from "lucide-react";

type SinglePlanCardType = {
  plan: any;
  selectedPlan: any;
  handleSelectPlan: (planIndex: number) => void;
};

const SmallScreenPlanCard: FC<SinglePlanCardType> = ({
  plan,
  selectedPlan,
  handleSelectPlan,
}) => {
  const getBgGradient = (selectedPlan: any) => {
    let bgColor;
    if (selectedPlan.id === plan.id && selectedPlan.slug === "bw_basic") {
      bgColor = "text-white from-blue-800 to-purple-800 from-40%";
    } else if (
      selectedPlan.id === plan.id &&
      selectedPlan.slug === "bw_standard"
    ) {
      bgColor = "text-white from-blue-800 to-purple-600 from-30%";
    } else if (
      selectedPlan.id === plan.id &&
      selectedPlan.slug === "bw_premium"
    ) {
      bgColor = "text-white from-blue-800 to-primary-600 from-40%";
    } else {
      bgColor = "bg-white text-neutral-700 border border-neutral-500";
    }
    return bgColor;
  };

  return (
    <div
      className={`w-full cursor-pointer bg-gradient-to-br ${getBgGradient(
        selectedPlan
      )} rounded-2xl p-4 text-sm flex-1`}
      onClick={() => handleSelectPlan(plan)}
    >
      <div className="flex flex-col items-start font-bold">
        <span className="capitalize text-xs">{plan?.name}</span>
        <span
          className={`text-[0.6rem] ${
            selectedPlan.slug === plan.slug ? "text-white" : "text-neutral-500"
          }`}
        >
          {plan.resolution_name}
        </span>
        <div
          className={`place-self-end ${
            selectedPlan?.id === plan.id ? "opacity-100" : "opacity-0"
          } transition-opacity ease-in-out duration-150 mt-3`}
        >
          <span
            className={`size-5 p-1 rounded-full bg-white flex place-items-center`}
          >
            <Check className="text-black" strokeWidth={3} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenPlanCard;
