"use client";
import Link from "next/link";
import "./CountryList.css";
import { Country } from "../types/country";
import React, { useContext } from "react";
import type { ReactElement } from "react";
import { CountryContext } from "../app/context/CountriesContext";
import { contextProp } from "../types/country";
const CountryList = (): ReactElement => {
  const countryContext: contextProp | null = useContext(CountryContext);
  return (
    <div className="country w-full h-full">
      <ul className="max-w-5/6 ml-auto mr-auto h-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#AFCDDD]">
        {countryContext?.countries?.map((country: Country) => (
          <li
            key={country.cca3}
            className="border rounded p-4 hover:bg-gray-100"
          >
            <Link href={`/countryList2/${country.cca3}`}>
              <span className="font-semibold">{country.name.common}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CountryList;
