import { useEffect, useState } from 'react';

const useDebouncedValue = (query: string, time: number = 300) => {
  const [debouncedVal, setDebouncedVal] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedVal(query), time);
    return () => clearTimeout(timer);
  },[query]);
  return debouncedVal;
};

export default useDebouncedValue;
