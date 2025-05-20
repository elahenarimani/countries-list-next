import { Country } from "../../types/country";
export default async function PageApi() {
  try {
    const data = await fetch("https://restcountries.com/v3.1/all");
    if (!data.ok) {
      throw new Error("Failed to fetch countries");
    }
    const countriesList: Country[] = await data.json();
    if (countriesList.length === 0) {
      //if empty
      return (
        <p className="text-center text-gray-500 mt-10">هیچ کشوری پیدا نشد.</p>
      );
    }

    return (
      // show data
      <ul className="p-4 list-disc">
        {countriesList.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    );
  } catch{
    // error
    return (
      <p className="text-center text-red-500 mt-10">
        خطا در دریافت اطلاعات کشورها.
      </p>
    );
  }
}
