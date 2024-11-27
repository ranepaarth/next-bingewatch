import { nextConstants } from "@/constants";
import {
  DecodedTokenType,
  getUserInfoFromToken,
} from "@/server-actions/get-user-info-from-token";
import React from "react";

const { API_URL, BINGEWATCH_SECURE_COOKIE } = nextConstants;
const ProfilePage = async () => {
  const cookie = (await getUserInfoFromToken(
    BINGEWATCH_SECURE_COOKIE
  )) as DecodedTokenType;
  let profiles;
  const request = await fetch(`${API_URL}/profiles`, {
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${cookie?.token}`,
    },
  });

  const response = await request.json();
  console.log(response);
  profiles = response.data;
  if (!response.status) {
    return <div>Log in to continue...</div>;
  }

  return <div>{profiles.map((profile: any) => profile.name)}</div>;
};

export default ProfilePage;
