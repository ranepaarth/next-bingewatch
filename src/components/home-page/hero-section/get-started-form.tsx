"use client";

import { usePathname, useRouter } from "@/navigation";
import { getStarted } from "@/server-actions/get-started-action";
import { ChevronRight } from "lucide-react";
import React, { useState, useTransition } from "react";

const GetStartedForm = ({
  placeholder,
  buttonLabel,
}: {
  placeholder: string;
  buttonLabel: string;
}) => {
  const router = useRouter();
  const pathname = usePathname().split("/")[1];
  const [email, setEmail] = useState<string>("");
  const [isLoading, startTransition] = useTransition();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // startTransition(() => {
    //   const response = getStarted({ email });
    //   console.log("RESPONSE",{ response });
    // });

    try {
      const response = await fetch("http://localhost:8000/api/get-started", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        // If not ok, throw an error
        const errorMessage = await response.text(); // Retrieve the error message
        throw new Error(`Error: ${response.status} - ${errorMessage}`);
      }
  
      // Parse the JSON response
      const res = await response.json();
  
      console.log({ res });
  
      return res;
    } catch (error:any) {
      console.error("Fetch error:", error);
      // Handle the error appropriately, e.g., return a default value or show a user-friendly message
      return { error: error.message };
    }
  };

  return (
    <form
      className="flex flex-col items-center gap-6 sm:gap-2 sm:flex-row justify-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="h-12 rounded-md bg-blue-300/20 px-4 border border-neutral-600 min-w-[400px] max-w-[500px] flex-grow text-sm"
        placeholder={placeholder}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-primary-600 text-2xl font-bold rounded-md flex py-2 px-4 hover:bg-primary-700  transition-colors duration-200 ease-in-out  justify-center items-center text-nowrap"
        type="submit"
        // onClick={() => {
        //   router.push("/signup/registration", { locale: pathname });
        // }}
      >
        {buttonLabel}
        <ChevronRight className="w-7 h-7 ml-2" />
      </button>
    </form>
  );
};

export default GetStartedForm;
