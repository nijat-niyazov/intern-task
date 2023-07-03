const SmsContent = ({ filtered }: { filtered: any }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-2 gap-x-10 px-14 h-48 md:h-96 overflow-y-scroll">
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
