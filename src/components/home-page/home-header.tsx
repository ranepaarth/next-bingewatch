import { ChevronDown, Languages } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomeHeader = () => {
  return (
    <header className="flex justify-between w-full items-center z-20">
      <Link
        className="font-semibold text-2xl md:text-3xl tracking-tighter text-primary-600"
        href={"/"}
      >
        BINGEWATCH
      </Link>
      <div className="flex gap-4 text-sm">
        <div className="relative border-neutral-500 border bg-neutral-900/70 rounded-md flex  items-center gap-x-2 w-32">
          <Languages className="w-5 h-5 absolute left-2" strokeWidth={2.5} />
          <select
            name="language"
            id="language"
            className="bg-transparent font-semibold appearance-none w-full text-center py-1.5 z-30 cursor-pointer"
          >
            <option value="en" className="text-black p-1">
              English
            </option>
            <option value="hi" className="text-black p-1">
              Hindi
            </option>
          </select>
          <ChevronDown className="w-4 h-4 absolute right-2" strokeWidth={2.5} />
        </div>
        <button className="py-1 px-4 bg-primary-600 rounded-md text-white font-semibold hover:bg-primary-700  transition-colors duration-200 ease-in-out">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
