"use client";
import { ICustomButtonProps } from "@/types";
import Image from "next/image";
const CustomBtn = ({
  title,
  styles,
  handleClick,
  btnType,
  textStyle,
  rightIccon,
  isDisabeled,
}: ICustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn  ${styles}`}
      onClick={handleClick}
    >
      <span className={`flex-1  ${textStyle}`}>{title}</span>
      {rightIccon && (
        <div className="relative w-6 h-6 ">
          <Image src={rightIccon} alt="right" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomBtn;
