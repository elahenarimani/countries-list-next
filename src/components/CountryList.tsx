"use client";
import Link from "next/link";
import React from 'react'
import { Country } from "../types/country";
interface Props {
  countries: Country[];
}
const CountryList = ({ countries }: Props) => {
  return (
    <ul className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {countries?.map((country : Country) => (
        <li key={country.cca3} className="border rounded p-4 hover:bg-gray-100">
          <Link href={`/countries/${country.cca3}`}>
            <span className="font-semibold">{country.name.common}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CountryList
