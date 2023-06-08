import { OptionsProps } from '../../../../../interfaces/form';

const Options = (props: OptionsProps) => {
  return (
    <ul
      style={{
        width: props.width,
        height: props.toggle ? '160px' : 0,
      }}
      className="absolute bg-white  w-full rounded-md transition-all z-10 top-[102%] duration-300 overflow-y-scroll overflow-x-hidden right-0 left-0"
    >
      {props.options?.map((option: any, i: number) => {
        const property = props.properties[0];

        return (
          <li
            style={{
              backgroundColor:
                props.activeData[property] === option[property] && '#93c5fd',
            }}
            className="p-1 hover:bg-gray-300 block cursor-pointer  rounded-md"
            onClick={() => {
              props.handleClick(option);
              props.handleToggle();
            }}
            key={i}
          >
            {option[property] ?? ''}
          </li>
        );
      })}
    </ul>
  );
};

export default Options;
