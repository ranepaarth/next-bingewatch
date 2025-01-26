"use client";

import { Link } from "@/navigation";
import React from "react";
import ProfileImage from "./profile-image";

const Profile = ({ profile }: { profile: any }) => {
  return (
    <Link
      href={`/profile`}
      className="max-sm:w-20 sm:w-24 md:w-32 aspect-square flex items-center justify-center gap-1 rounded flex-col cursor-pointer scale-95 hover:scale-100 transition-transform ease-in-out duration-200 flex-shrink group"
    >
      <div className="bg-white rounded relative aspect-square w-full flex items-center justify-center">
        <ProfileImage profileName={profile?.name} />
      </div>
      <div className="text-neutral-300 z-30 text-center text-xs md:text-base text-nowrap truncate text-ellipsis max-w-full">
        {profile.name}
      </div>
    </Link>
  );
};

export default Profile;
