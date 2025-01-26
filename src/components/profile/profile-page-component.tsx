import React from "react";
import Profile from "./profile";
import AddProfileButton from "./add-profile/add-profile";

const ProfilePageComponent = ({ profiles }: { profiles: [] }) => {
  return (
    <div className="p-4 flex flex-col justify-center items-center gap-6 w-full">
      <h2 className="text-4xl font-bold">Who&apos;s watching?</h2>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {profiles.map((profile: any) => (
          <Profile profile={profile} key={profile.id} />
        ))}

        {profiles.length < 5 ? <AddProfileButton /> : null}
      </div>
    </div>
  );
};

export default ProfilePageComponent;
