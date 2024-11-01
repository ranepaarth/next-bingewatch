"use server";

import { nextConstants } from "@/constants";
import { redirect } from "@/navigation";
import { encode } from "next-auth/jwt";
import { cookies } from "next/headers";

const { API_URL, GET_STARTED_COOKIE_NAME } = nextConstants;

export async function getStartedAction(data: { email: string }) {
  // const email = data.get("email");
  const { email } = data;
  const cookieStore = await cookies();
  const secret = process.env.AUTH_SECRET as string;
  if (!email) {
    return;
  }
  const res = await fetch(`${API_URL}/check-user-exist`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const result = await res.json();

  if (result.data) {
    console.log({ result }, "inside If getS");
    const token = await encode({
      secret,
      token: { email, isNewUser: false },
      salt: "10",
    });
    cookieStore.set(GET_STARTED_COOKIE_NAME, token);
    redirect("/signup/regForm");
    return;
  }
  const token = await encode({
    secret,
    token: { email, isNewUser: true },
    salt: "10",
  });

  const cookie = cookieStore.set(GET_STARTED_COOKIE_NAME, token);

  redirect("/signup/regForm");
  console.log("-------------");
  console.log({ cookie });
  console.log("-------------");
  return true;
}
