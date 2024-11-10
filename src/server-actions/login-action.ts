"use server";

import { nextConstants } from "@/constants";
import { redirect } from "@/navigation";
import { encode } from "next-auth/jwt";
import { cookies } from "next/headers";

const { API_URL, BINGEWATCH_SECURE_COOKIE, AUTH_SECRET } = nextConstants;

export const loginAction = async (data: LoginFormData) => {
  try {
    const { email, password } = data;

    const cookieStore = await cookies();
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const result = await res.json();
    if (res.ok) {
      console.log(result);
      const token = await encode({
        secret: AUTH_SECRET,
        token: {
          email: result.user.email,
          id: result.user.id,
          token: result.token,
          isNewUser: false,
          isLoggedIn: true,
        },
        salt: "10",
      });
      cookieStore.set(BINGEWATCH_SECURE_COOKIE, token, {
        secure: process.env.NODE_ENV === "production" ? true : false,
        sameSite: "lax",
        httpOnly: true,
        expires: 24 * 60 * 60 * 1000,
        maxAge: 24 * 60 * 60 * 1000,
      });

      console.log("---------------");
      console.log("Res getUser: 17", { result });
      console.log("---------------");
      return { success: true };
    }
    console.log("---------------------LOGIN RESPONSE-------------------------");
    console.log({ result });
    console.log("---------------------LOGIN RESPONSE-------------------------");
    return { success: false };
  } catch (error) {
    console.log("---------------");
    console.log("loginAction error: ", error);
    console.log("---------------");
    return { success: false };
  }
};
