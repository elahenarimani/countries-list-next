import CountryDetails from "../../../components/countryDetails/CountryDetails";
import React from "react";
export default function DaynamicPage({ params }: { params: { code: string } }) {
  const { code } = params;
  console.log("code received:", code);
  return (
    <div>
      <CountryDetails code={code} />
    </div>
  );
}