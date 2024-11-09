"use client";

import { useRouter } from "@/navigation";
import React, { FC } from "react";

type LogoutButtonTypes = {
  isLoggedIn: boolean | undefined;
};

const LogoutButton: FC<LogoutButtonTypes> = ({ isLoggedIn }) => {
  const router = useRouter();
  const handleLogoutButtonCLick = () => {
    isLoggedIn ? router.replace("/logout") : router.replace("/signin");
  };
  return (
    <button
      className="text-neutral-800 font-bold md:text-xl text-sm"
      onClick={handleLogoutButtonCLick}
    >
      {isLoggedIn ? "Sign out" : "Sign In"}
    </button>
  );
};

export default LogoutButton;
