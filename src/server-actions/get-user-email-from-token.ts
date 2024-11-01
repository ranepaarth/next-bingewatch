"use server";

import { nextConstants } from "@/constants";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export interface DecodedTokenType {
  isNewUser: string;
  email: string;
}

const { GET_STARTED_COOKIE_NAME } = nextConstants;

export const getUserEmailFromToken = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get(GET_STARTED_COOKIE_NAME);
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
