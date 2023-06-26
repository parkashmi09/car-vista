import React from "react";
import Link from "next/link";
import CustomBtn from "./CustomBtn";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="z-10 absolute w-full">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="car"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomBtn
          btnType="button"
          styles="text-primary-blue rounded-full bg-white min-w-[130px]"
          title="Sign In"
        />
      </nav>
    </header>
  );
};

export default Navbar;
