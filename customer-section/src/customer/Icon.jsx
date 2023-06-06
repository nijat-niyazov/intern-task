import { useState } from 'react';
import Down from '../icons/Down';

const Icon = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(p => !p);

  return (
    <section onClick={handleToggle}>
      <div
      // className=" rounded-md mt-2 py-2 px-3 focus-within:outline-red-400 bg-transparent flex items-center justify-between  border-blue-900 border-[1px]"

      // className="rounded-md mt-2 py-2 px-3 focus-within:outline-red-400 bg-transparent flex items-center justify-between  border-blue-900 border-[1px]"

      // className="absolute top-7 translate-y-0.5 cursor-pointer left-3 w-25 h-4 border-black border-1"
      >
        {children}
        <Down toggle={toggle} />
      </div>
    </section>
  );
};

export default Icon;
