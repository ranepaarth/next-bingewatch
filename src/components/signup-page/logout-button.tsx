"use client";

import { usePathname, useRouter } from "@/navigation";
import React, { FC } from "react";

type LogoutButtonTypes = {
  isLoggedIn: boolean | undefined;
};

const LogoutButton: FC<LogoutButtonTypes> = ({ isLoggedIn }) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleLogoutButtonCLick = () => {
    isLoggedIn ? router.push("/logout") : router.push("/signin");
  };

  function getClassName() {
    switch (pathname) {
      case "/":
        return "py-1 px-4 bg-primary-600 rounded-md text-white font-semibold hover:bg-primary-700  transition-colors duration-200 ease-in-out flex justify-center items-center text-nowrap";

      default:
        return "text-neutral-800 font-bold md:text-xl text-sm";
    }
  }

  return (
    <button className={getClassName()} onClick={handleLogoutButtonCLick}>
      {isLoggedIn ? "Sign out" : "Sign In"}
    </button>
  );
};

export default LogoutButton;
