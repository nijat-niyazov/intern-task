import { FieldShapeProps } from '../../../../../interfaces/form';

const FieldShape = (props: FieldShapeProps) => {
  return (
    <div className="relative grid gap-1">
      {props.label && (
        <label className="font-semibold" htmlFor={props.label}>
          {props.label}
        </label>
      )}

      {/* field div  */}
      <div className="rounded-md py-2 px-3 border-blue-300 border-[1px]">
        <div className="flex gap-1">{props.children}</div>
      </div>
    </div>
  );
};

export default FieldShape;
