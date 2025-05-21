import CountryList from "@/components/CountryList";
import getAllCountries from "./server/page"
import {Country} from "../types/country"
export default async function Home(){
  const countries :Country[] = await getAllCountries();
  if (countries.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No countries found.</p>;
  }
   return <CountryList countries={countries} />;
}
