"use client";

import { IShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import CustomBtn from "./CustomBtn";
import { updateSearchParams } from "@/utils";

export default function ShowMore({
  pageNumber,
  isNextPage,
  setLimit,
}: IShowMoreProps) {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };
  return (
    <div className="w-full flex justify-center gap-5 mt-10">
      {!isNextPage && (
        <CustomBtn
          title="Show More"
          btnType="button"
          styles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}
