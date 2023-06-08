import { InputProps } from '../../../../../interfaces/form';
import Select from '../select';
import FieldShape from '../shape';

const Input = (props: InputProps) => {
  // console.log(props);

  return (
    <FieldShape label={props.label}>
  

      <div className="flex  flex-row-reverse">
        <input
          value={props.value}
          name={props.name}
          id={props.label}
          onChange={props.handleState}
          type={props.type || 'text'}
          placeholder={props.placeholder}
          className="bg-transparent focus-within:outline-none w-full flex-1"
        />

        {props.selectable &&  (
          <Select
            activeData={props.activeData}
            properties={props.properties}
            data={props.data}
            handleClick={props.handleSelectOption}
            width={props.width}
          />
        )}

      </div>
    </FieldShape>
  );
};

export default Input;
