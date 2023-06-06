const Menus = ({ list, property, toggle, clickHandle, activeCountry }) => {
  
  return (
    <ul
      className={`absolute overflow-y-scroll overflow-x-hidden ${
        toggle ? 'h-40 w-full' : 'h-0 w-0'
      } z-10  py-2  bg-white rounded-md shadow-lg transition-[height] top-full duration-300`}
    >
      
      {list.map((country, i) => {
        return (
          <li
            key={i}
            className={` ${
              activeCountry === country[property] ? 'bg-blue-200' : null
            } py-1 px-3 hover:bg-gray-100 cursor-pointer`}
            onClick={() => {
              clickHandle(country);
              handleToggle();
            }}
          >
            {country[property]}
          </li>
        );
      })}

    </ul>
  );
};

export default Menus;
