// import { RotateProps } from '../../interfaces/form';

const Rotate = ({ toggle }:{ toggle: boolean } ) => {
  return (
    <svg
      className={`absolute cursor-pointer bottom-1/2 right-2 translate-y-[50%]  h-4 transition-transform ${
        toggle ? 'rotate-180' : ''
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Rotate;
