// import CountryDetails from "../../../components/countryDetails/CountryDetails";
// import React from "react";
// export default function DaynamicPage({ params }: { params: { code: string } }) {
//   const { code } = params;
//   console.log("code received:", code);
//   return (
//     <div>
//       <CountryDetails code={code} />
//     </div>
//   );
// }


import CountryDetails from "@/components/countryDetails/CountryDetails";
import React from "react";
export default async function page({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const code = await (await params).code;
  return (
    <div>
      <CountryDetails code={code} />
    </div>
  );
}