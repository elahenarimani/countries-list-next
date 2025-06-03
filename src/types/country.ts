export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [langCode: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cioc?: string;
  independent?: boolean;
  status?: string;
  unMember?: boolean;
  currencies?: {
    [code: string]: {
      symbol: string;
      name: string;
    };
  };
  idd?: {
    root?: string;
    suffixes?: string[];
  };
  capital?: string[];
  altSpellings?: string[];
  region?: string;
  subregion?: string;
  languages?: {
    [langCode: string]: string;
  };
  latlng?: [number, number];
  landlocked?: boolean;
  borders?: string[];
  area?: number;
  demonyms?: {
    eng?: {
      f: string;
      m: string;
    };
    fra?: {
      f: string;
      m: string;
    };
  };
  cca3?: string;
  translations?: {
    [langCode: string]: {
      official: string;
      common: string;
    };
  };
  flag?: string;
  flags?: {
    png?: string;
    svg?: string;
    alt?: string;
  };
  coatOfArms?: {
    png?: string;
    svg?: string;
  };
  maps?: {
    googleMaps?: string;
    openStreetMaps?: string;
  };
  population?: number;
  fifa?: string;
  car?: {
    signs?: string[];
    side?: string;
  };
  timezones?: string[];
  continents?: string[];
  gini?: {
    [year: string]: number;
  };
  startOfWeek?: string;
  capitalInfo?: {
    latlng?: [number, number];
  };
  postalCode?: {
    format?: string | null;
    regex?: string | null;
  };
}
export interface contextProp {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}
export type OptionType = {
  label: string;
  value: string | undefined;
};