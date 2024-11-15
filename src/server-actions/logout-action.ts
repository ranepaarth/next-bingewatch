"use server";

import { nextConstants } from "@/constants";
import { cookies } from "next/headers";
const { NEXT_APP_URL } = nextConstants;
export const logoutAction = async (cookieName: string) => {
  try {
    const response = await fetch(`${NEXT_APP_URL}/api/logout`, {
      headers: {
        "Content-type": "application/json",
      },
      credentials: "same-origin",
      method: "POST",
    });
    const data = await response.json();
    console.log({ data });

    if (response.ok) {
      console.log({ response });
      return { success: true };
    }
    return { success: false };
  } catch (error) {
    console.log("logout action catch ERROR: ", error);
    return { success: false };
  }
};
