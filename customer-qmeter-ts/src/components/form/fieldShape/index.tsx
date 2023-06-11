import { useRef } from 'react';
import { FieldShapeProps } from '~/interfaces/form';
import { errorField, errorMessages, validation } from '~/utils/form/validation';

const FieldShape = (props: FieldShapeProps) => {
  const errorRef = useRef<HTMLDivElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: any) => {
    if (validation[errorField(props.label)]) {
      errorRef.current?.classList.add('slide-in');
      errorRef.current?.classList.remove('scale-out');

      fieldRef.current?.classList.add('border-blue-300');
      fieldRef.current?.classList.remove('border-green-400');
    } else {
      errorRef.current?.classList.add('scale-out');
      errorRef.current?.classList.remove('slide-in');
      
      fieldRef.current?.classList.add('border-green-400');
      fieldRef.current?.classList.remove('border-blue-300');
    }
  };

  const handleFocus = (e: any) => {
    const focusedElement = e.target;

    const isWithinParent =
      focusedElement === componentRef.current ||
      componentRef.current?.contains(focusedElement);

    if (isWithinParent) {
      componentRef.current?.classList.remove('animate-bounce');

      fieldRef.current?.classList.add('border-blue-300');
      fieldRef.current?.classList.remove('border-red-700');
    }
  };

  const handleBlur = (e: any) => {
    if (e.target.value !== '' && validation[errorField(props.label)]) {
      fieldRef.current?.classList.add('border-red-700');
      fieldRef.current?.classList.remove('border-blue-300');

      componentRef.current?.classList.add('animate-bounce');
    }
  };

  return (
    <div
      ref={componentRef}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      className="relative mb-2 grid gap-1"
    >
      {/* label */}
      <div className="flex gap-3">
        {props.label && <label className="inline-block">{props.label}</label>}

        {/* error */}
        <div
          ref={errorRef}
          className="bg-red-300 opacity-0 px-2 rounded-md inline-block h-5"
        >
          <span>{errorMessages[errorField(props.label)]}</span>
        </div>
      </div>

      {/* field div  */}
      <div
        ref={fieldRef}
        className="rounded-md py-2 px-3 border-blue-300 transition-all  duration-300  border-[1px]"
      >
        <div className="flex gap-1">{props.children}</div>
      </div>
    </div>
  );
};

export default FieldShape;

{
  /* <div className="grid gap-5">
        <div className="fade-in bg-red-300 px-2 rounded-md inline-block h-5">
          <span>fade-in</span>
        </div>

        <div className="flip-container">
          <div className="fade-in bg-red-300 px-2 rounded-md inline-block h-5">
            <span>fade-in</span>
          </div>
        </div>

        <div className="fade-out bg-red-300 px-2 rounded-md inline-block h-5">
          <span>fade-out</span>
        </div>
        <div className="slide-in bg-red-300 px-2 rounded-md inline-block h-5">
          <span>slide-in</span>
        </div>
        <div className="slide-out bg-red-300 px-2 rounded-md inline-block h-5">
          <span>slide-out</span>
        </div>
        <div className="scale-out bg-red-300 px-2 rounded-md inline-block h-5">
          <span>scale-out</span>
        </div>
        <div className="rotate bg-red-300 px-2 rounded-md inline-block h-5">
          <span>rotate</span>
        </div>
        <div className="flip bg-red-300 px-2 rounded-md inline-block h-5">
          <span>flip</span>
        </div>
        <div className="bounce bg-red-300 px-2 rounded-md inline-block h-5">
          <span>bounce</span>
        </div>
        <div className="pulse bg-red-300 px-2 rounded-md inline-block h-5">
          <span>pulse</span>
        </div>
        <div className="blink bg-red-300 px-2 rounded-md inline-block h-5">
          <span>blink</span>
        </div>
        <div className="skew bg-red-300 px-2 rounded-md inline-block h-5">
          <span>skew</span>
        </div>
        <div className="shake bg-red-300 px-2 rounded-md inline-block h-5">
          <span>shake</span>
        </div>
        <div className="swing bg-red-300 px-2 rounded-md inline-block h-5">
          <span>swing</span>
        </div>
        <div className="roll bg-red-300 px-2 rounded-md inline-block h-5">
          <span>roll</span>
        </div>
        <div className="fade-in-up bg-red-300 px-2 rounded-md inline-block h-5">
          <span>fade-in-up</span>
        </div>
        <div className="fade-out-down bg-red-300 px-2 rounded-md inline-block h-5">
          <span>fade-out-down</span>
        </div>
        <div className="elastic bg-red-300 px-2 rounded-md inline-block h-5">
          <span>elastic</span>
        </div>
      </div> 
     </div> */
}
