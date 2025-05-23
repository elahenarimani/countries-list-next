// import { Country } from "@/types/country";

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import type { ReactElement } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext";
import ChangeMode from "../changeMode/ChangeMode";
const SearchBox = dynamic(() => import("./searchBox/SearchBox"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const Header = (): ReactElement => {
  const { theme } = useTheme();
  return (
    <div
      className={`header w-full h-[60px] lg:h-[85px] max-w-full ml-auto mr-auto px-[9px] bg-gray-200 lg:pl-[100px] lg:pr-[100px] flex flex-row justify-between items-center gap-1 lg:gap-0 ${
        theme === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-white"
      }`}
    >
      <Link href={`/`} className="lg:flex-1">
        <div className="hidden  w-full h-[100px] lg:flex justify-center items-center">
          <Image src="/logo.webp" alt="logo" width={150} height={80} />
        </div>
        <div className="w-[23px] h-[23px] lg:hidden text-gray-500 flex justify-center items-center ">
          <IoHomeOutline className={`w-full h-full ${ theme === "light" ? "text-[rgba(30,58,138)]" : "text-[#ffffff]"}`} />
        </div>
      </Link>
      <div className="lg:flex-1 flex justify-center items-center">
        <ChangeMode />
      </div>
      <div
        className={`w-full h-full sticky z-50 bg-gray-200  lg:flex-1 flex justify-center items-center ${
          theme === "light"
            ? "bg-gray-200 text-black"
            : "bg-gray-800 text-white"
        }`}
      >
        <SearchBox />
      </div>
    </div>
  );
};
export default Header;
