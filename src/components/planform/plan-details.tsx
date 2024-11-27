import React, { FC } from "react";
import { PlanCardFeature } from "./medium-screen-plan-card";

type PlanDetailsType = {
  plan: any;
};
const PlanDetails: FC<PlanDetailsType> = ({ plan }) => {
  return (
    <>
      <PlanCardFeature title="Yearly Price" value={"₹" + plan?.price} />
      <hr className="w-full border-b-[0px] border-neutral-200 my-4" />
      <PlanCardFeature
        title="Video and sound quality"
        value={plan?.av_quality}
      />
      <hr className="w-full border-b-[0px] border-neutral-200 my-4" />
      <PlanCardFeature title="Resolution" value={plan?.resolution} />
      <hr className="w-full border-b-[0px] border-neutral-200 my-4" />
      <PlanCardFeature
        title="Supported devices"
        value={plan?.supported_devices}
      />
    </>
  );
};

export default PlanDetails;
