"use client";

import { nextConstants } from "@/constants";
import { useRouter } from "@/navigation";
import React, { useEffect } from "react";

const { NEXT_APP_URL } = nextConstants;
export const dynamic = "force-dynamic";
const LogoutPage = () => {
  const router = useRouter();
  const logoutFunc = async () => {
    try {
      const response = await fetch(`${NEXT_APP_URL}/api/logout`, {
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
        method: "POST",
      });

      if (response.ok) {
      }
      return;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    logoutFunc();
    console.log("before interval");
    const timeoutId = setTimeout(() => {
      router.replace("/");
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div>
      You will be redirected in: <p>5 seconds</p>
      <button onClick={() => router.replace("/")}>Redirect now</button>
    </div>
  );
};

export default LogoutPage;
