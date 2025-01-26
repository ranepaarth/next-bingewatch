import CreateProfileModal from "@/components/profile/create-profile-modal";
import { nextConstants } from "@/constants";
import {
  DecodedTokenType,
  getUserInfoFromToken,
} from "@/server-actions/get-user-info-from-token";
import React from "react";

const { BINGEWATCH_SECURE_COOKIE } = nextConstants;
const CreateProfile = async () => {
  const decodedToken = (await getUserInfoFromToken(
    BINGEWATCH_SECURE_COOKIE
  )) as DecodedTokenType;

  return <CreateProfileModal email={decodedToken.email} />;
};

export default CreateProfile;
