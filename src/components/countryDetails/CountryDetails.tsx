"use client";
import Image from "next/image";
import "./CountryDetails.css";
import React from "react";
import { useContext } from "react";
import type { ReactElement } from "react";
import Link from "next/link";
import { Globe2, Languages, Landmark } from "lucide-react";
import { CountryContext } from "../../../src/context/CountriesContext";
import { contextProp } from "../../types/country";
import { Country } from "../../types/country";
import { useTheme } from "../../context/ThemeContext";
interface props {
  code: string;
}
const CountryDetails = ({ code }: props): ReactElement => {
  const { theme } = useTheme();
  const countryContext: contextProp | null = useContext(CountryContext);
  const country: Country | undefined = countryContext?.countries?.find(
    (country) => country.cca3 === code
  );
  return (
    <div
      className={`${theme === "dark" ? "dark" : ""} ${
        theme === "light" ? "!text-black opacity-70" : "text-white opacity-70"
      }`}
    >
      <div
        className={`mobile md:hidden w-full h-full flex flex-col justify-items-start items-center pl-[18px] pr-[18px] mt-[50px] ${
          theme === "light" ? "text-black opacity-70" : "text-white opacity-70"
        }`}
      >
        <h2
          className={`text-xl  font-bold  flex justify-center items-center mb-4 ${
            theme === "dark" ? "dark" : ""
          } ${
            theme === "light"
              ? "!text-black opacity-70"
              : "text-white opacity-70"
          }`}
        >
          Country Statistics and Population
        </h2>
        <div className="relative max-w-[350px] min-w-[350px] aspect-[2/1] shrink-0 rounded-[10px] overflow-hidden border-solid border-1px border-black">
          {country?.flags?.png ? (
            <Image
              src={country.flags.png}
              alt={`${country?.name?.official || "Country flag"}`}
              fill
              className="object-cover"
            />
          ) : null}
        </div>
        <h2
          className={`text-2xl font-semibold mt-4 ${
            theme === "dark" ? "dark" : ""
          } ${
            theme === "light"
              ? "!text-black opacity-70"
              : "text-white opacity-70"
          }`}
        >
          {country?.name?.official}
        </h2>
        <div className="w-full h-full max-w-[350px] p-5 ">
          <ul
            className={`space-y-3  text-sm  leading-6 ${
              theme === "dark" ? "dark" : ""
            } ${
              theme === "light"
                ? "!text-black opacity-70"
                : "text-white opacity-70"
            }`}
          >
            <li className="w-full h-full flex flex-row justify-items-start gap-2">
              <Globe2 className="min-w-[20px] min-h-[20px] text-blue-500" />
              <span
                className={`${theme === "dark" ? "dark" : ""} ${
                  theme === "light"
                    ? "!text-black opacity-70"
                    : "!text-white opacity-70"
                }`}
              >
                The current population of {country?.name?.official} is{" "}
                <strong
                  className={`${theme === "dark" ? "dark" : ""} ${
                    theme === "light"
                      ? "!text-black opacity-70"
                      : "!text-white opacity-70"
                  }`}
                >
                  {" "}
                  {country?.population}.
                </strong>
              </span>
            </li>
            <li className="w-full h-full flex flex-row justify-items-start gap-2">
              <Landmark className="min-w-[20px] min-h-[20px] text-green-600" />
              <span
                className={`${theme === "dark" ? "dark" : ""} ${
                  theme === "light"
                    ? "!text-black opacity-70"
                    : "!text-white opacity-70"
                }`}
              >
                {country?.name?.official} World ranking is{" "}
                <strong
                  className={`${theme === "dark" ? "dark" : ""} ${
                    theme === "light"
                      ? "!text-black opacity-70"
                      : "text-white opacity-70"
                  }`}
                >
                  {country?.ccn3}
                </strong>{" "}
                in the list of{" "}
                <Link
                  href="https://www.worldometers.info/world-population/"
                  target="_blank"
                  className="text-blue-500 hover:underline text-sm"
                >
                  Countries in the world by population
                </Link>
              </span>
            </li>
            <li className="w-full h-full flex flex-row justify-items-start gap-2">
              <Globe2 className="min-w-[20px] min-h-[20px] text-yellow-600" />
              <span
                className={`${theme === "dark" ? "dark" : ""} ${
                  theme === "light"
                    ? "!text-black opacity-70"
                    : "!text-white opacity-70"
                }`}
              >
                The total land area is{" "}
                <strong
                  className={`${theme === "dark" ? "dark" : ""} ${
                    theme === "light"
                      ? "!text-black opacity-70"
                      : "!text-white opacity-70"
                  }`}
                >
                  {country?.area}
                </strong>{" "}
                Km².
              </span>
            </li>
            <li className="w-full h-full flex flex-row justify-items-start gap-2">
              <Languages className="min-w-[20px] min-h-[20px] text-purple-500" />
              <span
                className={`${theme === "dark" ? "dark" : ""} ${
                  theme === "light"
                    ? "!text-black opacity-70"
                    : "!text-white opacity-70"
                }`}
              >
                People in this country speak{" "}
                {country?.languages
                  ? Object?.values(country.languages).length
                  : "No data"}{" "}
                languages:{" "}
                <strong
                  className={`${theme === "dark" ? "dark" : ""} ${
                    theme === "light"
                      ? "!text-black opacity-70"
                      : "!text-white opacity-70"
                  }`}
                >
                  {country?.languages
                    ? Object?.values(country.languages).join(", ")
                    : "No data"}
                </strong>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="desktop hidden md:block max-w-4/5 ml-auto mr-auto mt-[30px] px-[18px]">
        <div className="flex flex-col justify-around items-center">
          <h2
            className={`text-2xl  font-semibold   mb-4  ${
              theme === "dark" ? "dark" : ""
            } ${
              theme === "light"
                ? "!text-black opacity-70"
                : "!text-white opacity-70"
            }`}
          >
            Country Statistics and Population
          </h2>
          <h3
            className={`text-xl font-bold  mt-4 ${
              theme === "dark" ? "dark" : ""
            } ${
              theme === "light"
                ? "!text-black opacity-70"
                : "!text-white opacity-70"
            }
          `}
          >
            {country?.name?.official}
          </h3>
        </div>
        <div className="w-full h-full flex justify-between items-center ">
          <div className="max-w-[350px] flex flex-col justify-between items-center  gap-[15px] p-10">
            <div className="relative max-w-[350px] min-w-[350px] aspect-[2/1] shrink-0 rounded-[10px] overflow-hidden border-solid border-1px border-black">
              {country?.flags?.png ? (
                <Image
                  src={country.flags.png}
                  alt={`${country?.name?.official || "Country flag"}`}
                  fill
                  className="object-cover"
                />
              ) : null}
            </div>
          </div>
          <div className="h-full  p-5 max-w-[350px] ">
            <ul className="space-y-3  text-sm text-gray-800 leading-6 ">
              <li className="w-full h-full flex flex-row justify-items-start gap-2">
                <Globe2 className="min-w-[20px] min-h-[20px] text-blue-500" />
                <span
                  className={`${theme === "dark" ? "dark" : ""} ${
                    theme === "light"
                      ? "!text-black opacity-70"
                      : "!text-white opacity-70"
                  }`}
                >
                  The current population of {country?.name?.common} is{" "}
                  <strong
                    className={` ${theme === "dark" ? "dark" : ""} ${
                      theme === "light"
                        ? "!text-black opacity-70"
                        : "!text-white opacity-70"
                    }`}
                  >
                    {" "}
                    {country?.population}.
                  </strong>
                </span>
              </li>
              <li className="w-full h-full flex flex-row justify-items-start gap-2">
                <Landmark className="min-w-[20px] min-h-[20px] text-green-600" />
                <span
                  className={` ${theme === "dark" ? "dark" : ""} ${
                    theme === "light"
                      ? "!text-black opacity-70"
                      : "!text-white opacity-70"
                  }`}
                >
                  {country?.name?.common} World ranking is{" "}
                  <strong>{country?.ccn3}</strong> in the list of{" "}
                  <Link
                    href="https://www.worldometers.info/world-population/"
                    target="_blank"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    Countries in the world by population
                  </Link>
                </span>
              </li>
              <li className="w-full h-full flex flex-row justify-items-start gap-2">
                <Globe2 className="min-w-[20px] min-h-[20px] text-yellow-600" />
                <span
                  className={` ${theme === "dark" ? "dark" : ""} ${
                    theme === "light"
                      ? "!text-black opacity-70"
                      : "!text-white opacity-70"
                  }`}
                >
                  The total land area is <strong>{country?.area}</strong> Km².
                </span>
              </li>
              <li className="w-full h-full flex flex-row justify-items-start gap-2">
                <Languages className="min-w-[20px] min-h-[20px] text-purple-500" />
                <span
                  className={` ${theme === "dark" ? "dark" : ""} ${
                    theme === "light"
                      ? "!text-black opacity-70"
                      : "!text-white opacity-70"
                  }`}
                >
                  People in this country speak{" "}
                  {country?.languages
                    ? Object?.values(country.languages).length
                    : "No data"}{" "}
                  languages:{" "}
                  <strong
                    className={` ${theme === "dark" ? "dark" : ""} ${
                      theme === "light"
                        ? "!text-black opacity-70"
                        : "!text-white opacity-70"
                    }`}
                  >
                    {country?.languages
                      ? Object?.values(country.languages).join(", ")
                      : "No data"}
                  </strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryDetails;
