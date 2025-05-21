import { Country } from "../../types/country";

export default async function getAllCountries(): Promise<Country[]> {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    if (!res.ok) {
      throw new Error("Failed to fetch countries");
    }
    const countriesList: Country[] = await res.json();
    return countriesList;
  } catch {
    return [];
  }
}
