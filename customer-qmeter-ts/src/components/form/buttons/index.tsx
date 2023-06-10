import { ButtonProps } from '~/interfaces/form';

const Button = ({ children, type }: ButtonProps) => {
  return (
    <button
      type={type}
      // style={{
      //   backgroundColor:'green'
      // }}
      className="uppercase bg-[#354050] text-white py-4 px-10 rounded-full text-xs"
    >
      {children}
    </button>
  );
};

export default Button;
