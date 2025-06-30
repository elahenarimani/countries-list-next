"use client";
import Link from "next/link";
import Image from "next/image";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import React, { useContext, useMemo, useState } from "react";
import type { ReactElement } from "react";
import "./CountryList.css";
import { Country } from "../types/country";
import { CountryContext } from "../context/CountriesContext";
import { contextProp } from "../types/country";
import Button from "./button/Button";
import { useTheme } from "../context/ThemeContext";
const CountryList = (): ReactElement => {
  const countryContext: contextProp | null = useContext(CountryContext);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;
  const indexOfLast = currentPage * countriesPerPage;
  const indexOfFirst = indexOfLast - countriesPerPage;
  const { theme } = useTheme();
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
  }, [countryContext?.countries, indexOfLast, indexOfFirst]);
  return (
    <main
      className={`country-list country w-full h-full pt-[100px] px-[10px] ${
        theme === "dark" ? "dark" : ""
      } ${theme === "light" ? "text-black" : "text-white"}`}
    >
      <ul
        className={`xl:max-w-[1280px] pb-[10px] pt-[20px] w-full h-full mr-auto ml-auto   grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center rounded-[5px]  ${
          theme === "light"
            ? "bg-[#AFCDDD] opacity-80 text-black"
            : "bg-gray-800 text-white  opacity-70"
        }`}
      >
        {currentCountries?.map((country: Country) => (
          <li
            key={country.cca3}
            className={`transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 w-full  rounded pointer  lg:h-[200px] max-w-[500px] md:w-[300px]  h-[150px]  px-[10px] sm:pl-0 sm:pr-0  ${
              theme === "light" ? "hover:bg-blue-100" : "hover:bg-blue-900"
            }`}
          >
            <Link
              href={`/countryCode/${country.cca3}`}
              className="w-full h-full p-5 xl:p-10 flex flex-col justify-start items-start "
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
                  <strong className="font-semibold ">capital:</strong>
                  <span className="truncate">{country?.capital}</span>
                </div>
                <div className="flex justify-items-start gap-1">
                  <strong className="font-semibold">languages:</strong>
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
            className={`icon-prev w-6 h-6 rounded-[5px] ${
              currentPage === 1
                ? "cursor-not-allowed bg-[rgba(30,58,138,0.4)]"
                : "bg-[rgba(30,58,138)] cursor-pointer"
            }`}
            onClickHandler={handlePrevPage}
            disabled={currentPage === 1}
          >
            <GrFormPrevious className="w-full h-full" />
          </Button>
          <Button
            className={`icon-prev w-6 h-6 rounded-[5px] ${
              currentPage ===
              Math.ceil(
                (countryContext?.countries?.length ?? 0) / countriesPerPage
              )
                ? "cursor-not-allowed bg-[rgba(30,58,138,0.4)]"
                : "bg-[rgba(30,58,138)] cursor-pointer"
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
