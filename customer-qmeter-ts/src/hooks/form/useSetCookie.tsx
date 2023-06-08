import { useEffect, useState } from 'react';
import { SetCookie } from '../../interfaces/form/fetchDatainterfaces';

const useSetCookie = ({ cookie, countries }: SetCookie) => {
  const [activeCountry, setactiveCountry] = useState(null);

  useEffect(() => {
    setactiveCountry(
      countries?.find(c => c.country_name === cookie.country_name)
    );
  }, [cookie]);

  return { activeCountry };
};

export default useSetCookie;
