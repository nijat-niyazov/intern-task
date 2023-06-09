import { InputProps } from "../../../../interfaces/form";

const Input = (props: InputProps) => {
  return (
    <input
      value={props.value}
      name={props.name}
      // id={props.label}
      onChange={props.handleState}
      type={props.type || 'text'}
      placeholder={props.placeholder}
      className="bg-transparent focus-within:outline-none w-full flex-1"
    />
  );
};

export default Input;
