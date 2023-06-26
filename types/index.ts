import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface ICustomButtonProps {
  title: string;
  styles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyle?: string;
  rightIccon?: string;
  isDisabeled?: boolean;
}

export interface ISearchMenufacturerProps {
  selected: string;
  setSelected: (menufacturer: string) => void;
}

export interface ICarsProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface IFilterProps {
  manufacturer: string;
  year: number | string;
  fuel: string | number;
  limit: number;
  model: string;
}

export interface IOptionProps {
  title: string;
  value: string;
}

export interface ICustomFilterProps {
  title: string;
  options: IOptionProps[];
  setFilter: Dispatch<SetStateAction<string | number>>;
}

export interface IShowMoreProps {
  pageNumber: number;
  isNextPage: boolean;
  setLimit: Dispatch<SetStateAction<number>>;
}
