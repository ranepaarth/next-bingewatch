"use client";

import { usePathname, useRouter } from "@/navigation";
import { ChevronRight } from "lucide-react";
import React from "react";

const GetStartedForm = ({
  placeholder,
  buttonLabel,
}: {
  placeholder: string;
  buttonLabel: string;
}) => {
  const router = useRouter();
  const pathname = usePathname().split("/")[1];

  return (
    <form className="flex flex-col items-center gap-6 sm:gap-2 sm:flex-row justify-center">
      <input
        type="text"
        className="h-12 rounded-md bg-blue-300/20 px-4 border border-neutral-600 min-w-[400px] max-w-[500px] flex-grow text-sm"
        placeholder={placeholder}
      />
      <button
        className="bg-primary-600 text-2xl font-bold rounded-md flex py-2 px-4 hover:bg-primary-700  transition-colors duration-200 ease-in-out  justify-center items-center text-nowrap"
        type="button"
        onClick={() => {
          router.push("/signup/registration", { locale: pathname });
        }}
      >
        {buttonLabel}
        <ChevronRight className="w-7 h-7 ml-2" />
      </button>
    </form>
  );
};

export default GetStartedForm;
