"use server";

import { nextConstants } from "@/constants";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export interface DecodedTokenType {
  isNewUser?: string;
  email?: string;
  isLoggedIn?: boolean;
  token?: string;
}

export const getUserInfoFromToken = async (cookieName: string) => {
  try {
    console.log(cookieName);
    const cookieStore = await cookies();
    // console.log("after cookies()")
    const token = cookieStore.get(cookieName);
    const secret = nextConstants.AUTH_SECRET;

    if (!token) {
      console.error("No token found in cookies");
      return { success: false }; // Or handle it according to your logic
    }

    const decodedToken = (await decode({
      token: token.value,
      secret,
      salt: "10",
    })) as DecodedTokenType;

    if (!decodedToken) {
      console.error("Decoded token is null");
      return { success: false };
    }

    return decodedToken;
  } catch (error) {
    console.error("Error getting user email from token:", error);
    return { success: false };
  }
};
