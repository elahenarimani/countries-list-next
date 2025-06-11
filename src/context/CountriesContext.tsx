"use client";
import React, { createContext, useEffect, useState } from "react";
import { Country } from "../types/country";
import getAllCountries from "@/server/page";
// import getAllCountries from "@/app/api/countries/page";
// import getAllCountries from "../server/rout";
interface contextProp {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}
export const CountryContext = createContext<contextProp | null>(null);
const CountriesContext = ({ children }: { children: React.ReactNode }) => {
  const [countries, setCountries] = useState<Country[]>(() => {
    return [];
  });
  useEffect(() => {
    async function fetchCountries() {
      const data = await getAllCountries();
      setCountries(data);
    }
    fetchCountries();
  }, []);




//   useEffect(() => {
//   async function fetchCountries() {
//     const res = await fetch("https://restcountries.com/v3.1/all");
//     console.log(res)
//     if (!res.ok) {
//       console.error("API fetch error");
//       return;
//     }
//     const data = await res.json();
//     setCountries(data);
//   }
//   fetchCountries();
// }, []);
  return (
    <CountryContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountryContext.Provider>
  );
};
export default CountriesContext;
