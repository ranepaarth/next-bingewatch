"use server";

import { nextConstants } from "@/constants";
import { redirect } from "@/navigation";
import { encode } from "next-auth/jwt";
import { cookies } from "next/headers";

const { API_URL, AUTH_SECRET, BINGEWATCH_SECURE_COOKIE, DOMAIN } =
  nextConstants;
export const registerAction = async (data: LoginFormData) => {
  const { email, password } = data;

  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password }),
      credentials: "include",
    });

    if (!res.ok) {
      console.log(res);
      return;
    }
    if (res.ok) {
      const cookieStore = await cookies();
      const result = await res.json();
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
      console.log("------------------");
      console.log({ token, result });
      console.log("------------------");
      cookieStore.set(BINGEWATCH_SECURE_COOKIE, token, {
        secure: process.env.NODE_ENV === "production" ? true : false,
        sameSite: "lax",
        httpOnly: true,
        expires: 24 * 60 * 60 * 1000,
        maxAge: 24 * 60 * 60 * 1000,
        domain: DOMAIN,
      });

      console.log("---------------");
      console.log("REGISTER ACTION: 17", { result });
      console.log("---------------");
      console.log({ data });
      console.log("-------NO DATA----------");
      return { success: true };
    }
  } catch (error) {
    console.log("---------------");
    console.log("register Action error: ", error);
    console.log("---------------");
    return { success: false };
  }
};
