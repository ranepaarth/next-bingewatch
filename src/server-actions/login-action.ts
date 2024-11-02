"use server";

import { nextConstants } from "@/constants";
import { redirect } from "@/navigation";
import { encode } from "next-auth/jwt";
import { cookies } from "next/headers";

const { API_URL, BINGEWATCH_SECURE_COOKIE, AUTH_SECRET } = nextConstants;

export const loginAction = async (data: LoginFormData) => {
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

  if (res.ok) {
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
    cookieStore.set(BINGEWATCH_SECURE_COOKIE, token);

    console.log("---------------");
    console.log("Res getUser: 17", { result });
    console.log("---------------");
    return result;
  }
  return false;
};
