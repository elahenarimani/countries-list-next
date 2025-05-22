"use client";
import Link from "next/link";
import Image from "next/image";
import "./CountryList.css";
import { Country } from "../types/country";
import React, { useContext, useMemo, useState } from "react";
import type { ReactElement } from "react";
import { CountryContext } from "../context/CountriesContext";
import { contextProp } from "../types/country";
import Button from "./button/Button";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
const CountryList = (): ReactElement => {
  const countryContext: contextProp | null = useContext(CountryContext);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;
  const indexOfLast = currentPage * countriesPerPage;
  const indexOfFirst = indexOfLast - countriesPerPage;
  console.log( Math.ceil(
                countryContext?.countries?.length  ?? 0 / countriesPerPage
              ))
  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function handleNextPage() {
    if (
      currentPage <
      Math.ceil(countryContext?.countries?.length ?? 0 / countriesPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    }
  }
  const currentCountries = useMemo(() => {
    return countryContext?.countries?.slice(indexOfFirst, indexOfLast);
  }, [countryContext?.countries, currentPage]);
  return (
    <main className="country w-full h-full pt-[100px] px-[10px] ">
      <ul className="xl:max-w-[1280px] py-[10px] w-full h-full mr-auto ml-auto   grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center bg-[#AFCDDD] opacity-80 rounded-[5px] ">
        {currentCountries?.map((country: Country) => (
          <li
            key={country.cca3}
            className="w-full  rounded   hover:bg-blue-100 pointer  lg:h-[200px] max-w-[500px] md:w-[300px]  h-[150px]  px-[10px] sm:pl-0 sm:pr-0"
          >
            <Link
              href={`/countryList2/${country.cca3}`}
              className="w-full h-full p-10 flex flex-col justify-start items-start "
            >
              <div className="w-full h-full flex flex-row justify-between gap-6">
                <p className="font-semibold flex-1 truncate">
                  {country.name.official}
                </p>
                <div className="relative max-w-[80px] min-w-[80px] aspect-[2/1] shrink-0">
                  <Image
                    src={country?.flags?.png ?? ""}
                    alt={`${country?.name?.common || "Country flag"}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full h-full flex flex-col justify-between gap-6">
                <div className="flex justify-items-start gap-1">
                  <span className="font-semibold ">capital:</span>
                  <span className="truncate">{country?.capital}</span>
                </div>
                <div className="flex justify-items-start gap-1">
                  <span className="font-semibold">languages:</span>
                  <span className="truncate">
                    {Object.values(country?.languages ?? {})[0] ?? "-"}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination-controls w-full h-[50px] ">
        <section className="button-wrapper w-full h-full flex justify-end items-center px-[40px] gap-5">
          <Button
            className={` icon-prev w-6 h-6 rounded-[5px]  ${
              currentPage === 1 ? "bg-white cursor-not-allowed bg-opacity-60" : "bg-gray-600 cursor-pointer"
            }`}
            onClickHandler={handlePrevPage}
            disabled={currentPage === 1}
          >
            <GrFormPrevious className="w-full h-full" />
          </Button>
          <Button
            className={` icon-prev w-6 h-6 rounded-[5px]  ${
              currentPage ===
              Math.ceil(
                (countryContext?.countries?.length ?? 0) / countriesPerPage
              )
                ? "bg-white cursor-not-allowed bg-opacity-60"
                : "bg-gray-500 cursor-pointer"
            }`}
            onClickHandler={handleNextPage}
            disabled={
              currentPage ===
              Math.ceil(
                (countryContext?.countries?.length ?? 0) / countriesPerPage
              )
            }
          >
            <GrFormNext className="w-full h-full" />
          </Button>
        </section>
      </div>
    </main>
  );
};
export default CountryList;
