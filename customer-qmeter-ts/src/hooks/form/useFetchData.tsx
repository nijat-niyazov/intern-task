import { useEffect, useState } from 'react';

import { CountriesData } from '../../interfaces/form';
import {
  CookieTypes,
  DataOfFetch,
} from '../../interfaces/form/fetchDatainterfaces';

const useFetchData = () => {
  const [countries, setCountries] = useState<CountriesData[] | any>([]);

  const [cookie, setCookie] = useState<CookieTypes | any>('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        const infos = data.map((each: DataOfFetch) => {
          return {
            icon: each.flags.png,
            country_name: each.name.common,
            phone_code: each.idd ? each.idd.root + each.idd.suffixes : '',
            country_code: each.cca2,
          };
        });

        setCountries(infos);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCountries();

    const cookie = async () => {
      try {
        const response = await fetch('https://geolocation-db.com/json/');
        const data = await response.json();
        setCookie(data);
      } catch (err) {
        console.log(err);
      }
    };

    cookie();
  }, []);

  return { cookie, countries };
};

export default useFetchData;
