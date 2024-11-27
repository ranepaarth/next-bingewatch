import { Check } from "lucide-react";
import React, { FC } from "react";
import PlanDetails from "./plan-details";

type MediumScreenPlanCardType = {
  plan: any;
  selectedPlan: any;
  handleSelectPlan: (planIndex: number) => void;
};

type PlanCardFeatureType = {
  title: string;
  value: string;
};

export const PlanCardFeature: FC<PlanCardFeatureType> = ({ title, value }) => {
  return (
    <div className="flex max-sm:flex-row max-sm:justify-between max-sm:items-center flex-col w-full">
      <span className="text-sm font-semibold text-neutral-500">{title}</span>
      <span className="text-sm font-semibold text-neutral-800 capitalize max-sm:text-end">
        {value}
      </span>
    </div>
  );
};

const MediumScreenPlanCard = ({
  plan,
  selectedPlan,
  handleSelectPlan,
}: MediumScreenPlanCardType) => {
  const getBgGradient = (planSlug: string) => {
    switch (planSlug) {
      case "bw_basic":
        return "from-blue-800 to-purple-800 from-50%";
      case "bw_standard":
        return "from-blue-800 to-purple-600 from-40%";
      case "bw_premium":
        return "from-blue-800 to-primary-600 from-50%";
      default:
        break;
    }
  };
  return (
    <article
      className={`flex-1 flex flex-col items-center gap-6 border rounded-2xl cursor-pointer transition-shadow ease-in-out duration-200 h-full bg-white pb-14 p-2 ${
        selectedPlan?.id === plan.id
          ? "border-neutral-400 shadow-xl shadow-black/20"
          : "border-neutral-300"
      }`}
      onClick={() => handleSelectPlan(plan)}
      key={plan.id}
    >
      <div className="w-full">
        <div
          className={`w-full text-white h-24 rounded-xl bg-gradient-to-br ${getBgGradient(
            plan.slug
          )} p-2 px-4`}
        >
          <div className="flex flex-col">
            <span className="font-bold text-lg capitalize">{plan.name}</span>
            <span className="text-xs font-bold">{plan.resolution_name}</span>
          </div>
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

      <div className="px-2 w-full flex flex-col place-items-start">
        <PlanDetails plan={plan} />
      </div>
    </article>
  );
};

export default MediumScreenPlanCard;
