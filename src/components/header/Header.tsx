// import { Country } from "@/types/country";

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
// import  { useContext } from "react";
import type { ReactElement } from "react";
import { TiSocialDribbbleCircular } from "react-icons/ti";
// import SearchBox from "./searchBox/SearchBox";
const SearchBox = dynamic(() => import("./searchBox/SearchBox"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
// import SearchBox from "./searchBox/SearchBox";
// import { CountryContext } from "../../app/context/CountriesContext";
// import { contextProp } from "../../types/country";
// interface Props {
//   countries: Country[];
// }
const Header = (): ReactElement => {
  // const countryContext: contextProp | null = useContext(CountryContext);
  return (
    <div className="header w-full h-[60px] lg:h-[150px] max-w-full ml-auto mr-auto px-[18px] bg-gray-200 lg:pl-[100px] lg:pr-[100px] flex flex-row justify-between items-center gap-5 lg:gap-0 ">
      <Link href={`/`}>
        <div className="hidden lg:flex w-full h-[100px] flex-row justify-center items-start">
          <Image src="/logo.webp" alt="logo" width={250} height={100} />
        </div>
        <div className="w-[30px] h-[30px] lg:hidden text-gray-500 flex justify-center items-center">
          <TiSocialDribbbleCircular className="w-full h-full" />
        </div>
      </Link>
      <div className=" w-full h-full sticky z-50 bg-gray-200  ">
        <SearchBox />
      </div>
    </div>
  );
};
export default Header;
