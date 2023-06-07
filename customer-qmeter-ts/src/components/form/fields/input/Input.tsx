import { InputProps } from '../../../../interfaces/interfaces';
import FieldShape from '../FieldShape';

const Input = (props: InputProps) => {
  return (
    <FieldShape label={props.label}>
      <input
        value={props.value}
        name={props.name}
        id={props.label}
        onChange={props.handleState}
        type={props.type || 'text'}
        placeholder={props.placeHolder}
        className="rounded-md py-2 px-3 focus-within:outline-red-400 bg-transparent  border-blue-900 border-[1px]"
      />
    </FieldShape>
  );
};

export default Input;
