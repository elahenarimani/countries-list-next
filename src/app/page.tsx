import React from "react";
import dynamic from "next/dynamic";
const CountryList = dynamic(() => import("@/components/CountryList"), {
  loading: () => <p className="text-center text-gray-500 mt-10">Loading...</p>,
});
export default function Home() {
  return (
    <div className="overflow-y-auto">
      <CountryList />
    </div>
  );
}
