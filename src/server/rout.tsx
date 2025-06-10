// "use client";
// import { Country } from "../types/country";
// export default async function getAllCountries(): Promise<Country[]> {
//   try {
//     const res = await fetch("https://restcountries.com/v3.1/all",{cache:'no-store'});
//     if (!res.ok) {
//       throw new Error("Failed to fetch countries");
//     }
//     const countriesList: Country[] = await res.json();
//     return countriesList;
//   }
//    catch {
//     return [];
//   }
// }
// import { NextResponse } from "next/server";

// export async function GET() {
//   const res = await fetch("https://restcountries.com/v3.1/all");
//   if (!res.ok) {
//     return NextResponse.json({ error: "Failed to fetch countries" }, { status: 500 });
//   }
//   const countries = await res.json();
//   return NextResponse.json(countries);
// }