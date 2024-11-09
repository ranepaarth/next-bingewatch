"use server";

import { nextConstants } from "@/constants";
import { redirect } from "@/navigation";
import { encode } from "next-auth/jwt";
import { cookies } from "next/headers";

const { API_URL, BINGEWATCH_SECURE_COOKIE, AUTH_SECRET } = nextConstants;

export async function getStartedAction(data: { email: string }) {
  try {
    const { email } = data;
    const cookieStore = await cookies();
    const secret = AUTH_SECRET;
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
      console.log({ result }, "inside If getStartedAction");
      const token = await encode({
        secret,
        token: { email: email ?? "", isNewUser: false },
        salt: "10",
      });
      cookieStore.set(BINGEWATCH_SECURE_COOKIE, token);

      return { success: true };
    }
    const token = await encode({
      secret,
      token: { email: email ?? "", isNewUser: true },
      salt: "10",
    });

    const cookie = cookieStore.set(BINGEWATCH_SECURE_COOKIE, token, {
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: "lax",
      httpOnly: true,
      expires: 24 * 60 * 60 * 1000,
      maxAge: 24 * 60 * 60 * 1000,
    });

    // redirect("/signup/regForm");
    console.log("-------------");
    console.log({ cookie });
    console.log("-------------");
    return { success: true };
  } catch (error) {
    console.log("-------------");
    console.log("Get started action error: ", error);
    console.log("-------------");
    return {success:false};
  }
}
