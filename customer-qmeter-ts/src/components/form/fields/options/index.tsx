import { OptionsProps } from '../../../../interfaces/form';
import Option from './Option';

const Options = (props: OptionsProps) => {
  return (
    <ul
      style={{
        width: props.width,
        height: props.rotated ? '160px' : 0,
      }}
      className="absolute w-full top-full bg-white rounded-b-md overflow-y-auto z-10 transition-all duration-300  left-0"
    >
      {props.options?.map((option: any, i: number) => {
        const property = props.properties[0];

        return (
          <li
            key={i}
            style={{
              backgroundColor:
                props.activeData[property] === option[property]
                  ? '#93c5fd'
                  : '',
            }}
            className="hover:bg-gray-300 flex justify-between items-center  cursor-pointer rounded-md p-2"
            onClick={() => {
              props.handleClick(option);
              props.handleRotate();
            }}
          >
            <Option activeData={option} properties={props.properties} />
          </li>
        );
      })}
    </ul>
  );
};

export default Options;

// <Option activeData={props.activeData} properties={props.properties} option={option} handleClick={props.handleClick} handleToggle={props.handleToggle} key={i}/>
