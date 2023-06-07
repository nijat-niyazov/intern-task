import { useState } from 'react';
import Rotate from '../../../../assets/icon/Rotate';
import { SelectProps } from '../../../../interfaces/interfaces';
import FieldShape from '../FieldShape';
import Options from './Options';

const Select = (props: SelectProps) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(p => !p);

  return (
    <FieldShape label={props.label}>
      <div className="rounded-md relative py-2 px-3 focus-within:outline-red-400 bg-transparent border-blue-900 border-[1px] transition-all duration-300">
        <span>{props.activeData[props?.property]}</span>

        <Options
          toggle={toggle}
          handleClick={props.handleClick}
          activeData={props.activeData}
          handleToggle={handleToggle}
          countries={props.countries}
        />

        <div onClick={handleToggle} className="relative">
          <Rotate toggle={toggle} position={'50%'} />
        </div>
      </div>
    </FieldShape>
  );
};

export default Select;
