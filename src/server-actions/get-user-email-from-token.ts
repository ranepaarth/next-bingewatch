"use server";

import { nextConstants } from "@/constants";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export interface DecodedTokenType {
  isNewUser?: string;
  email?: string;
  isLoggedIn?: boolean;
}

export const getUserEmailFromToken = async (cookieName: string) => {
  const cookieStore = cookies();
  const token = cookieStore.get(cookieName);
  const secret = nextConstants.AUTH_SECRET;

  const decodedToken = (await decode({
    token: token?.value as string,
    secret,
    salt: "10",
  })) as DecodedTokenType;
  if (!decodedToken) {
    return;
  }
  console.log("----get-started-form---------");
  console.log(
    await decode({
      token: token?.value as string,
      secret,
      salt: "10",
    }),
    "raw decodedToken without Type interface"
  );
  console.log("----get-started-form---------");

  return decodedToken;
};
