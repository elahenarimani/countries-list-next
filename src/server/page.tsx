"use client";
import { Country } from "../types/country";
export default async function getAllCountries(): Promise<Country[]> {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,cca3");
    if (!res.ok) {
      throw new Error("Failed to fetch countries");
    }
    const countriesList: Country[] = await res.json();
    console.log(countriesList)
    console.log(countriesList);
    return countriesList;
  } catch {
    return [];
  }
}