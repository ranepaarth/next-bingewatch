import { Link, pathnames } from "@/navigation";
import React from "react";

type NextButtonProps = {
  href: keyof typeof pathnames;
};

const NextButton = ({ href }: NextButtonProps) => {
  return (
    <Link
      href={href}
      className="w-full text-center py-4 bg-red-600 hover:bg-red-700 rounded-sm text-white text-2xl font-semibold"
    >
      Next
    </Link>
  );
};

export default NextButton;
