import CountryDetails from "@/components/countryDetails/CountryDetails";
import React from "react";
export default function Page({ params }: { params: { code: string } }) {
  const { code } = params;
  return (
    <div>
      <CountryDetails code={code} />
    </div>
  );
}