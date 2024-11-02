"use server";

import { nextConstants } from "@/constants";

const { API_URL } = nextConstants;
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

    const data = await res.json();
    console.log({ res });

    if (!res.ok) {
      console.log(res);
      return;
    }

    // router.push("/signup/verifyEmail");
    console.log({ data });

    console.log("-------NO DATA----------");
  } catch (error) {
    console.log(error);
  }
};
