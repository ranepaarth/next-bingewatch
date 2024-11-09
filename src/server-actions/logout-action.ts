"use server";

import { cookies } from "next/headers";

export const logoutAction = async (cookieName: string) => {
  try {
    const cookieStore = await cookies();

    cookieStore.set(cookieName, "",  {
      maxAge: -1,
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: "lax",
      httpOnly: true,
      expires: new Date(0),
      path: "/", // Make sure the path matches where the cookie was originally set
      domain: "localhost",
    });
    return { success: true };
  } catch (error) {
    console.log("logout action catch ERROR: ", error);
    return { success: false };
  }
};
