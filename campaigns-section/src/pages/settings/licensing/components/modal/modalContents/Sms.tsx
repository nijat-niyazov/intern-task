import { useMemo } from 'react';
import useSWR from 'swr';
import { fetchData } from '../../../api';
import { smsPriceEndpoint } from '../../../api/endpoints';

const SmsContent = ({ data, query }: { data?: any; query: string }) => {
  const { data: modalData } = useSWR(smsPriceEndpoint, fetchData);

  
  const filtered = useMemo(() => {
    return modalData?.filter((eachData: any) =>
      eachData.name.toLowerCase().includes(query?.toLowerCase())
    );
  }, [modalData, query]);

  return (
    <ul className="sm:grid sm:grid-cols-2 gap-2 gap-x-10 px-10 pb-10 h-40 place-content-start overflow-y-scroll">
      {filtered?.map((country: any, i: number) => (
        <li key={i} className="flex w-full justify-between">
          <span className="text-gray-500 font-light">{country.name}</span>
          <span className="font-semibold">$ {country.price} </span>
        </li>
      ))}
    </ul>
  );
};

export default SmsContent;
