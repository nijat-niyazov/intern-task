import { ButtonProps } from '~/interfaces/form';
import { validation } from '~/utils/form/validation';

const Button = ({ children, type }: ButtonProps) => {
  // const buttonRef = useRef<HTMLButtonElement>(null);
  // const errors = validation;

  // // useEffect(() => {
  // //   buttonRef.current?.classList.add('bg-[#354050]');
  // // }, []);

  console.log(validation);

  // useEffect(() => {
  //   if(errors)
  //   buttonRef.current?.classList.add('bg-green-600');
  // }, [errors]);

  return (
    <button
      // ref={type === 'submit' ? buttonRef : null}
      type={type}
      className="uppercase focus-within:outline-none text-white bg-[#354050] py-4 px-10 rounded-full text-xs transition-all duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
