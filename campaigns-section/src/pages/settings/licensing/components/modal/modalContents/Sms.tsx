import { useMemo } from 'react';
const SmsContent = ({ data, query }: { data?: any; query: string }) => {
  const filtered = useMemo(() => {
    // if (cacheKey?.includes('sms')) {
    return data?.filter((eachData: any) =>
      eachData.name.toLowerCase().includes(query?.toLowerCase())
    );
    // }
  }, [data, query]);

  return (
    <ul className="grid sm:grid-cols-2 gap-2 gap-x-10 px-10 pb-10 h-40 place-content-start overflow-y-scroll">
      {filtered?.map((country: any, i: number) => (
        <li key={i} className="flex justify-between">
          <span className="text-gray-500 font-light">{country.name}</span>
          <span className="font-semibold">$ {country.price} </span>
        </li>
      ))}
    </ul>
  );
};

export default SmsContent;
