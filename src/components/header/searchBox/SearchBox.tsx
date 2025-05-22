// "use client";
// import React, { useContext } from "react";
// import AsyncSelect from "react-select/async";
// import { CountryContext } from "../../../context/CountriesContext";
// import { contextProp } from "../../../types/country";
// type OptionType = {
//   label: string;
//   value: string |undefined;
// };
// import { useRouter } from "next/navigation";
// export default function SearchBox() {
//   const router = useRouter();
//   const countryContext: contextProp | null = useContext(CountryContext);
//   if (!countryContext) return null;
//   const loadOptions = (inputValue: string): Promise<OptionType[]> => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const filtered : OptionType[]= countryContext?.countries
//           .filter((country) =>
//             country.name.common.toLowerCase().includes(inputValue.toLowerCase())
//           )
//           .map((country) => ({
//             label: country.name.common,
//             value: country.cca3,
//           }));
//         resolve(filtered);
//       }, 300);
//     });
//   };
//   const handleChange = (selectedOption: OptionType | null) => {
//     if (selectedOption) {
//     const countryCode : string | undefined= countryContext?.countries.find(item => item.cca3== selectedOption.value)?.cca3
//       router.push(`/countryList2/${countryCode}`);
//     }
//   };
//   return (
//     <div className="w-full max-w-md mx-auto h-full ltr">
//       <AsyncSelect
//         cacheOptions
//         defaultOptions
//         loadOptions={loadOptions}
//         placeholder="Search country..."
//         onChange={handleChange}
//         styles={{
//         input: (base) => ({
//             ...base,
//             direction: "ltr",
//           }),
//         }}
//       />
//     </div>
//   );
// }
