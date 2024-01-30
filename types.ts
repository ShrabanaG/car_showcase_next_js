import { MouseEventHandler } from "react";

export type CarProps = {
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
};

export type CustomButtonProps = {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export type SearchManuFacturerProps = {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
};

export type CarDetailsDialogueProps = {
  isOpen: boolean;
  handleCloseDialogue: () => void;
  car: CarProps;
};

export type FilterProps = {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
};

export type HomeProps = {
  searchParams: FilterProps;
};

export type OptionProps = {
  title: string;
  value: string;
};
export type CustomFilterProps = {
  title: string;
  options: OptionProps[];
};
