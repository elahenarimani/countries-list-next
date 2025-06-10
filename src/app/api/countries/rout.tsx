import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch countries" }, { status: 500 });
  }

  const countries = await res.json();
  return NextResponse.json(countries);
}