"use server";

import { nextConstants } from "@/constants";
import {
  DecodedTokenType,
  getUserInfoFromToken,
} from "./get-user-info-from-token";
import { revalidatePath, revalidateTag } from "next/cache";
import { getLocale } from "next-intl/server";

const { API_URL, BINGEWATCH_SECURE_COOKIE } = nextConstants;

export const createProfileAction = async (formData: FormData) => {
  const { token } = (await getUserInfoFromToken(
    BINGEWATCH_SECURE_COOKIE
  )) as DecodedTokenType;

  const name = formData.get("name");
  const locale = getLocale();

  console.log("first");
  console.log({ name });
  try {
    const request = await fetch(`${API_URL}/profiles`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
      }),
    });

    if (request.status) {
      const response = await request.json();
      console.info("Create Profile", response);
      revalidateTag("profiles");
      return { success: true, message: "Profile Created Successfully" };
    }
  } catch (error) {
    console.log(error);
  }
};
