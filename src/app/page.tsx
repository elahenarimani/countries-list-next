import Header from "@/components/header/Header";
import React from "react";
import dynamic from "next/dynamic";

const CountryList = dynamic(() => import("@/components/CountryList"), {
  loading: () => <p className="text-center text-gray-500 mt-10">در حال بارگذاری لیست کشورها...</p>,
});
// import React, { useContext } from "react";
// import { CountryContext } from "../app/context/CountriesContext";
// import { contextProp } from "../types/country";
export default function Home() {
  //  const countryContext: contextProp | null = useContext(CountryContext);
  // if (countryContext?.countries.length === 0) {
  //   return (
  //     <p className="text-center mt-10 text-gray-500">No countries found.</p>
  //   );
  // }
  return (
    <div  className="overflow-y-auto">
      
      <Header />
      <CountryList />
    </div>
  );
}
