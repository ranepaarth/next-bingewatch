import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { nextConstants } from "@/constants";
import {
  DecodedTokenType,
  getUserInfoFromToken,
} from "@/server-actions/get-user-info-from-token";

const { API_URL, BINGEWATCH_SECURE_COOKIE } = nextConstants;
const generatedSignature = (
  razorpayOrderId: string,
  razorpayPaymentId: string
) => {
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) {
    throw new Error(
      "Razorpay key secret is not defined in environment variables."
    );
  }
  const sig = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");
  return sig;
};

export async function POST(request: NextRequest) {
  const { plan_id, orderCreationId, razorpayPaymentId, razorpaySignature } =
    await request.json();
  const cookie = (await getUserInfoFromToken(
    BINGEWATCH_SECURE_COOKIE
  )) as DecodedTokenType;

  const signature = generatedSignature(orderCreationId, razorpayPaymentId);
  if (signature !== razorpaySignature) {
    return NextResponse.json(
      { message: "payment verification failed", isOk: false },
      { status: 400 }
    );
  }

  console.log("---------------------------");
  console.log("token", { token: cookie.token });

  const userRequest = await fetch(`${API_URL}/subscribe-to-plan`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${cookie.token}`,
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ plan_id }),
  });

  if (userRequest.status) {
    const response = await userRequest.json();
    const data = response?.data;

    console.log({ response, data });

    return NextResponse.json(
      { message: "payment verified successfully", isOk: true },
      { status: 200 }
    );
  }

  //TODO: make an entry for the users with the plan_id and create a new entry for payments data
  //TODO: create migration for payments table and consider what all data must reside
  return NextResponse.json(
    { message: "payment verified successfully", isOk: true },
    { status: 200 }
  );
}
