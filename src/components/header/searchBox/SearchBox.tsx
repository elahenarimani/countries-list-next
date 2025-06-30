"use client";
import React, { useContext, useState } from "react";
import AsyncSelect from "react-select/async";
import { useRouter } from "next/navigation";
import { CountryContext } from "../../../context/CountriesContext";
import { contextProp } from "../../../types/country";
import { useTheme } from "../../../context/ThemeContext";
import { OptionType } from "../../../types/country";
export default function SearchBox() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const countryContext: contextProp | null = useContext(CountryContext);
  const { theme } = useTheme();
  if (!countryContext?.countries) return null;
  const loadOptions = (inputValue: string): Promise<OptionType[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered: OptionType[] = countryContext?.countries
          .filter((country) =>
            country.name.common.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((country) => ({
            label: country.name.common,
            value: country.cca3,
          }));
        resolve(filtered);
      }, 300);
    });
  };
  const handleChange = (option: OptionType | null) => {
  if (option) {
    setSelectedOption(option);
    const countryCode: string | undefined = countryContext?.countries.find(
      (item) => item.cca3 == option.value
    )?.cca3;
    router.push(`/countryCode/${countryCode}`);
    setSelectedOption(null);  
  }
};
  return (
    <div
      className={`w-full max-w-md mx-auto  ltr  ${
        theme === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-white"
      }`}
    >
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        placeholder="Enter your country name..."
        value={selectedOption}
        onChange={handleChange}
        styles={{
          input: (base) => ({
            ...base,
            direction: "ltr",
          }),
          placeholder: (base) => ({
            ...base,
            color: "rgba(30,58,138)",
          }),
        }}
      />
    </div>
  );
}
