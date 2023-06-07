import { SelectProps } from '../../../../interfaces/interfaces';

const Options = (props: SelectProps) => {

  return (
    <ul
      className={`absolute bg-white  ${
        props.toggle ? 'h-40' : 'h-0'
      }  w-full rounded-md transition-all z-10 top-[102%] duration-300 overflow-y-scroll overflow-x-hidden right-0 left-0`}
    >
      {props.countries.map((country: any, i: number) => (
        <li
          className={` ${
            props.activeData.country_name === country.country_name
              ? 'bg-blue-300'
              : ''
          }  p-1 hover:bg-gray-300 block cursor-pointer  rounded-md`}
          onClick={() => {
            props.handleClick(country);
            props.handleToggle();
          }}
          key={i}
        >
          {country.country_name}
        </li>
      ))}
    </ul>
  );
};

export default Options;
