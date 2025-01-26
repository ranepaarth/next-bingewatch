import AddProfileButton from "@/components/profile/add-profile/add-profile";
import ProfilePageComponent from "@/components/profile/profile-page-component";
import { getProfiles } from "@/util/getProfiles";
import React from "react";

const ProfilePage = async () => {
  const data = await getProfiles();

  const profiles = data?.profiles;
  const totalProfiles = data?.count;
  if (!profiles) {
    return <AddProfileButton />;
  }

  console.log({ profiles });

  return <ProfilePageComponent profiles={profiles} />;
};

export default ProfilePage;
