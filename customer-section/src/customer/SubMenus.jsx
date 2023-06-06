import { useEffect, useRef, useState } from 'react';
import Down from '../icons/Down';
import Menus from './Menus';
import Model from './Model';

const SubMenus = ({ list, clickHandle, activeCountry }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(p => !p);

  const ref = useRef();

  const handleClickOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <Model label={'Country'}>
      
      <section
        ref={ref}
        className="rounded-md py-2 px-3 focus-within:outline-red-400 bg-transparent flex items-center justify-between  border-blue-900 border-[1px]"
        onClick={handleToggle}
      >
        <span>{activeCountry}</span>
        <Down position="auto" toggle={toggle} />
      </section>

      {/* Submenus */}

      <Menus
        list={list}
        clickHandle={clickHandle}
        activeCountry={activeCountry}
        property={'name'}
        toggle={toggle}
      />
    </Model>
  );
};

export default SubMenus;


