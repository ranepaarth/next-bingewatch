"use client";

import MediumScreenPlanCard from "@/components/planform/medium-screen-plan-card";
import React, { useEffect, useRef, useState } from "react";
import NextButton from "../signup-page/next-button";
import { useRouter } from "@/navigation";
import SmallScreenPlanCard from "./small-screen-plan-card";
import PlanDetails from "./plan-details";
import Script from "next/script";

const PlanList = ({ plans }: { plans: any }) => {
  const router = useRouter();
  const idRef = useRef(null);
  const [loading, setLoading] = useState<
    "creatingOrderId" | "checkingOut" | null
  >();

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const handleSelectPlan = async (plan: any) => {
    setSelectedPlan(plan);
  };

  useEffect(() => {
    createOrderId();
  }, [selectedPlan]);

  const createOrderId = async () => {
    setLoading("creatingOrderId");
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Number(selectedPlan?.price!) * 100,
        }),
      });

      if (!response.ok) {
        setLoading(null);
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const id = data.orderId;
      idRef.current = id;
      setLoading(null);
      return;
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  const processPayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading("checkingOut");
    const orderId = idRef.current;
    console.log(orderId);
    try {
      const options = {
        key: process.env.key_id,
        amount: Number(selectedPlan?.price) * 100,
        currency: "INR",
        name: "Payment", //busniess name
        description: "Payment",
        order_id: orderId,
        handler: async function (response: any) {
          const data = {
            plan_id: selectedPlan?.id,
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await fetch("/api/verify", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          });
          const res = await result.json();
          //process further request, whatever should happen after request fails
          if (res.isOk) {
            router.push("/profile");
          } //process further request after
          else {
            alert(res.message);
          }
        },
        theme: {
          color: "#F10000",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        alert(response.error.description);
      });
      setLoading(null);
      paymentObject.open();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <section className="w-full flex flex-col items-center gap-4 h-full">
        <form
          onSubmit={processPayment}
          className="flex flex-col items-center gap-4 h-full"
        >
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
              loading={
                loading === "creatingOrderId" || loading === "checkingOut"
              }
              type="submit"
            >
              Checkout
            </NextButton>
          </div>
        </form>
      </section>
    </>
  );
};

export default PlanList;
