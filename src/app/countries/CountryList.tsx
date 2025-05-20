"use client";
import React from "react";
import { Country } from "../../types/country";
type Props = {
  countries: Country[];
};
import type { ReactElement } from "react";
import CountryCard from "../countryCard/CountryCard";
const CountriesPage = (props: Props): ReactElement => {
  const countries = props.countries;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {countries.map((country) => (
        <CountryCard   />
      ))}
    </div>
  );
};

export default CountriesPage;
