import { useState } from 'react';

import { Rotate } from '~/assets/icons';
import { SelectProps } from '~/interfaces/form';
import Options from '../options';
import Option from '../options/Option';

const Select = (props: SelectProps) => {
  const [rotated, setRotated] = useState(false);

  const handleRotate = () => setRotated(p => !p);

  return (
    <>
      <Options
        activeData={props.activeData}
        rotated={rotated}
        options={props.data}
        handleClick={props.handleClick}
        properties={props.properties}
        handleRotate={handleRotate}
        width={props.width}
      />

      {/* select field */}
      <div
        onClick={handleRotate}
        className="relative cursor-pointer flex justify-between items-center"
        style={{ width: props.width }}
      >
        {/* active data */}
        <div className="flex gap-2 items-center">
          <Option activeData={props.activeData} properties={props.properties} />
        </div>

        <Rotate rotated={rotated} />
      </div>
    </>
  );
};

export default Select;
