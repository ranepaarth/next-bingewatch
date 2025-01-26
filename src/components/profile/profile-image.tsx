import Image from "next/image";
import React, { FC, useState } from "react";

type ProfileImageProps = {
  profileName: string;
};
const ProfileImage: FC<ProfileImageProps> = ({ profileName }) => {
  const [isErrorImg, setIsErrorImg] = useState(false);

  return !isErrorImg ? (
    <Image
      src={`https://api.dicebear.com/9.x/lorelei-neutral/png?seed=${profileName}`}
      alt={profileName}
      height={96} // Fixed height
      width={96} // Fixed width
      className="w-20 md:w-28 aspect-square object-cover rounded-full"
      priority
      onError={() => setIsErrorImg(true)}
    />
  ) : (
    <Image
      src="/images/default-profile.png"
      alt={profileName}
      height={96}
      width={96}
      className="w-full h-full object-cover rounded-full"
      priority
      onError={() => setIsErrorImg(true)}
    />
  );
};

export default ProfileImage;
