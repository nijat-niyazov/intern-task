import { FieldShapeProps } from '../../../interfaces/form';

const FieldShape = (props: FieldShapeProps) => {
  return (
    <div className="relative grid gap-1">
      <div className="flex items-center gap-2 font-semibold">
        {props.label && <label className="">{props.label}</label>}

        <div
          style={{
            opacity: props.error ? '100%' : '0%',
            // width: props.error ? 'auto' : '100%',
          }}
          className="bg-red-300 px-2 rounded-md transition-all duration-200 h-5"
        >
          <span style={{ color: props.error ? 'black' : 'transparent' }}>
            {props.error}
          </span>
        </div>
      </div>

      {/* field div  */}
      <div className="rounded-md py-2 px-3 border-blue-300 border-[1px]">
        <div className="flex gap-1">{props.children}</div>
      </div>
    </div>
  );
};

export default FieldShape;
