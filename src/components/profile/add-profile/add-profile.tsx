import { Link } from "@/navigation";
import React from "react";

const AddProfileButton = () => {
  return (
    <Link href={"/create-profile"}>
      <div className="max-sm:w-20 sm:w-24 md:w-32 scale-95 hover:scale-100 transition-transform ease-in-out duration-200 flex flex-col items-center gap-1">
        <button className="text-5xl font-semibold border border-neutral-500 text-neutral-500 flex items-center justify-center rounded w-full aspect-square">
          +
        </button>
        <p className="text-neutral-300 text-center text-xs md:text-base truncate">Add</p>
      </div>
    </Link>
  );
};

export default AddProfileButton;
