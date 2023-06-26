"use client";

import { ICarsProps } from "@/types";
import { calculateCarRent, getCarImageUrl } from "@/utils";
import React, { useState } from "react";
import Image from "next/image";
import { CustomBtn, CarDetails } from "../components";

interface ICarcardProps {
  car: ICarsProps;
}

const CarCard = ({ car }: ICarcardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make}
          {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$ </span>
        {carRent}
        <span className="self-end text-[14px] font-medium ">/day </span>
      </p>
      <div className="  relative w-full h-40 my-3 object-contain">
        <Image src={getCarImageUrl(car)} width={400} height={400} alt="car" />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Mannual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            <p className="text-[14px]">{drive?.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="gas" width={20} height={20} />
            <p className="text-[14px]">{city_mpg}MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomBtn
            title="View More"
            rightIccon="/right-arrow.svg"
            textStyle="text-white text-[14px] leading-[17px] font-bold"
            styles="w-full py-[16px] rounded-full bg-primary-blue"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        car={car}
        closeModal={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </div>
  );
};

export default CarCard;
