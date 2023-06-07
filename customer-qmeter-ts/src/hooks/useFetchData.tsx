import { useEffect, useState } from 'react';
import { DataOfFetch } from '../interfaces/interfaces';

const useFetchData = () => {
  const [countries, setCountries] = useState([]);

  const [cookie, setCookie] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        const infos = data.map((each: DataOfFetch) => {
          return {
            flag: each.flags.png,
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
