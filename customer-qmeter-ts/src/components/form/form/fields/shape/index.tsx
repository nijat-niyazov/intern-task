import { FieldShapeProps } from '../../../../../interfaces/form';

const FieldShape = (props: FieldShapeProps) => {
  return (
    <div className="relative grid gap-1">
      {props.label && (
        <label className="font-semibold" htmlFor={props.label}>
          {props.label}
        </label>
      )}

      <div className="rounded-md cursor-pointer relative py-2 px-3 focus-within:outline-red-400 bg-transparent border-blue-900 border-[1px] transition-all duration-300">
        {props.children}
      </div>
      
    </div>
  );
};

export default FieldShape;
