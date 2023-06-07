import { SubmitButtonProps } from '../../../interfaces/interfaces';

const SubmitButton = ({ children }: SubmitButtonProps) => {
  return (
    <>
      <span className="text-xs my-2 text-center">
        By filling out the form, you consent to the processing of personal data
      </span>
      <button
        type="submit"
        className="uppercase bg-[#354050] text-white py-4 px-10 rounded-full text-xs"
      >
        {children}
      </button>
    </>
  );
};

export default SubmitButton;
