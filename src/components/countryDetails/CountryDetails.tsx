// import { Country } from "../../types/country";
import React from "react";
// import { useContext } from "react"
import type { ReactElement } from "react";
// import { CountryContext } from "../../app/context/CountriesContext";
// import { contextProp } from "../../types/country";
interface props {
  code: string;
}
const CountryDetails = ({ code}: props) : ReactElement=> {
    // const countryContext: contextProp | null = useContext(CountryContext);
  return <div>
    <div>country detail{code}</div>;
    
  </div>

};
export default CountryDetails;
