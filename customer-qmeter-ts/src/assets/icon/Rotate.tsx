import { RotateProps } from '../../interfaces/interfaces';

const Rotate = ({ position, toggle }: RotateProps) => {
  return (
    <svg
      // style={{ left: position }}
      className={`absolute bottom-full w-full cursor-pointer  h-4 transition-transform transform ${
        toggle ? 'rotate-180' : ''
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        // style={{ marginLeft: '100%' }}
        fillRule="evenodd"
        d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Rotate;
