"use client";
import React, { useState } from "react";
import SearchMenufacturer from "./SearchMenufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ISearchbarProps } from "@/types";

const SearchBtn = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying-glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({ setManufacturer, setModel }: ISearchbarProps) => {
  const [searchMenufacturer, setSearchMenufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchMenufacturer === "" && searchModel === "") {
      alert("please type something in search bar");
    }
    setModel(searchModel);
    setManufacturer(searchMenufacturer);
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenufacturer
          selected={searchMenufacturer}
          setSelected={setSearchMenufacturer}
        />
        <SearchBtn otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="carsearchModel"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchBtn otherClasses="sm:hidden" />
      </div>
      <SearchBtn otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
