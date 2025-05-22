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
  // const totalPages = Math.ceil(countryContext?.countries?.length ?? +"" / countriesPerPage);
  const indexOfLast = currentPage * countriesPerPage;
  const indexOfFirst = indexOfLast - countriesPerPage;
  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function handleNextPage() {
    if (
      currentPage <
      Math.ceil(countryContext?.countries?.length ?? +"" / countriesPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    }
  }
  const currentCountries = useMemo(() => {
    return countryContext?.countries?.slice(indexOfFirst, indexOfLast);
  }, [countryContext?.countries, currentPage]);
  // const paginate = (pageNumber: number) => {
  //   setCurrentPage(pageNumber);
  // };

  return (
    <main className="country w-full h-full pt-[100px] px-[10px] pb-[10px]">
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
      <div className="pagination-controls w-full  ">
        <section className="button-wrapper flex justify-end items-center">
          <Button
            className="icon-prev"
            onClickHandler={handlePrevPage}
            disabled={currentPage === 1}
          >
            <GrFormPrevious />
          </Button>
          <Button
            className="icon-next "
            onClickHandler={handleNextPage}
            disabled={
              currentPage ===
              Math.ceil(
                countryContext?.countries?.length ?? +"" / countriesPerPage
              )
            }
          >
            <GrFormNext />
          </Button>
        </section>
      </div>
    </main>
  );
};
export default CountryList;
