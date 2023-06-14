export type CookieTypes = {
  country_code: string;
  country_name: string;
};

export interface CountriesData {
  icon: string;
  name: string;
  phone_code: string;
  cca2: string;
  country_name: string;
}

export interface DataOfFetch {
  flags: { png: string };
  name: {
    common: string;
  };
  idd?: {
    root: string;
    suffixes: string;
  };
  cca2: 'string';
}
