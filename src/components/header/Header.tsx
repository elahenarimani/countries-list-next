// import { Country } from "@/types/country";
import Image from "next/image";
import React from "react";
// import  { useContext } from "react";
import type { ReactElement } from "react";
// import SearchBox from "./searchBox/SearchBox";
// import { CountryContext } from "../../app/context/CountriesContext";
// import { contextProp } from "../../types/country";
// interface Props {
//   countries: Country[];
// }
const Header = (): ReactElement => {
 
  // const countryContext: contextProp | null = useContext(CountryContext);
  return (
    <div className="w-full h-[230px] max-w-full ml-auto mr-auto  pt-[24px] pl-[100px] pr-[100px] flex flex-col justify-start items-center ">
      <div className="w-full h-[160px] flex flex-row justify-center items-start">
        <Image src="/logo.webp" alt="logo" width={400} height={200}  />
      </div>
      <div className="w-full h-[50px] sticky top-0 bg-white z-50 py-2">
        {/* <SearchBox/> */}
      </div>
    </div>
  );
};
export default Header;
