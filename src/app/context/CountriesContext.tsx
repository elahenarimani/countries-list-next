"use client";
import React, { createContext, useEffect, useState } from "react";
import { Country } from "../../types/country";
import getAllCountries from "../server/page";
interface contextProp{
    countries:Country[],
    setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}
export const CountryContext = createContext<contextProp | null>(null);
const CountriesContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    const [countries, setCountries] = useState<Country[]>(()=>{return[]});
    useEffect((
    )=>{
     async function fetchCountries() {
        const data = await getAllCountries();
        setCountries(data);
    }
    fetchCountries()
    },[])
  return (
    <CountryContext.Provider value={{countries , setCountries}}>
      {children}
    </CountryContext.Provider>
  )
}
export default CountriesContext
