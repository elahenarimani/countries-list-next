import React from 'react'
import type { ReactElement } from "react";
import { Country } from "../../types/country"
type Props = {
  country: country;
};

const CountryCard = (props: Props) : ReactElement => {
   const country = props.countries;
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
     
      <p className="text-sm text-gray-600"> population : {country?.toLocaleString()}</p>
    </div>
  )
}

export default CountryCard
