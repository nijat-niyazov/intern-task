import { FieldShapeProps } from '../../../interfaces/interfaces';

const FieldShape = (props: FieldShapeProps) => {
  return (
    <div className="relative grid gap-1">
      {props.label && 
      <label className="font-semibold" htmlFor={props.label}>
        {props.label}
      </label>
}
      {props.children}
    </div>
  );
};

export default FieldShape;
