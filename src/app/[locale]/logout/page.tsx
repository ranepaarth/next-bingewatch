"use client";

import Logo from "@/components/logo";
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
      router.push("/");
      router.refresh();
    }, 30000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleRedirectButtonClick = () => {
    router.push("/");
    router.refresh();
  };

  return (
    <main className="flex flex-col items-center justify-start w-full bg-white md:bg-black min-h-screen">
      <div className="max-w-screen-xl w-full">
        <header className="flex items-start max-w-screen-xl p-4">
          <Logo />
        </header>
        <section className="flex flex-col items-center justify-center p-4">
          <article className="bg-neutral-100 min-w-sm max-w-md mt-20 text-neutral-800 p-4 rounded-sm font-light">
            <div className="space-y-2 text-sm">
              <h3 className="text-2xl font-medium">Leaving So Soon?</h3>
              <p className="text-lg">
                Just so you know, you don’t always need to sign out of Netflix.
                It’s only necessary if you’re on a shared or public computer.
              </p>
              <p className="font-normal text-balance">
                You’ll be redirected to Bingewatch.com in 30 seconds.
              </p>
            </div>
            <button
              onClick={handleRedirectButtonClick}
              className="w-full text-lg text-white font-medium bg-blue-500 hover:bg-blue-500/90 py-2 mt-16 transition-colors ease-in-out duration-150"
            >
              Redirect now
            </button>
          </article>
        </section>
      </div>
    </main>
  );
};

export default LogoutPage;
