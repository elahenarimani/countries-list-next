"use client";
import Link from "next/link";
import Image from "next/image";
import "./CountryList.css";
import { Country } from "../types/country";
import React, { useContext } from "react";
import type { ReactElement } from "react";
import { CountryContext } from "../context/CountriesContext";
import { contextProp } from "../types/country";
const CountryList = (): ReactElement => {
  const countryContext: contextProp | null = useContext(CountryContext);
  return (
    <div className="country w-full h-full pt-[100px] pr-[10px] pl-[10px]">
      <ul className="xl:max-w-[1280px] pt-[10px]  pb-[10px] ml-auto w-full h-full mr-auto  p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 bg-[#AFCDDD] rounded-[5px]">
        {countryContext?.countries?.map((country: Country) => (
          <li
            key={country.cca3}
            className="w-full border rounded p-4 hover:bg-blue-100 pointer"
          >
            <Link href={`/countryList2/${country.cca3}`}>
              <p className="font-semibold">{country.name.official}</p>
              <p>{country?.capital}</p>
              <Image src={country?.flags?.png ?? ""} alt={country?.name?.common || "Country flag"}  width={100} height={60}/>
              <p>{Object.values(country?.languages ?? {})[0] ?? "-"}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CountryList;
