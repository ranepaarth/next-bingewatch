import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      className="font-semibold text-2xl md:text-3xl tracking-tighter text-primary-600 w-24 md:w-40 relative"
      href={"/"}
    >
      <Image
        src={logo}
        alt="logo"
        width={0}
        height={0}
        sizes="100vw"
        className="object-contain w-full h-auto"
      />
    </Link>
  );
};

export default Logo;
