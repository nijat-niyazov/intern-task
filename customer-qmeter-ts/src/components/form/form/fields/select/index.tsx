import { useState } from 'react';
import { Rotate } from '../../../../../assets/icon';
import { SelectProps } from '../../../../../interfaces/form';
import Options from './Options';

const Select = (props: SelectProps) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(p => !p);

  console.log(props);

  return (
    // <FieldShape label={props.label}>
    <>
      <Options
        activeData={props.activeData}
        toggle={toggle}
        options={props.data}
        handleClick={props.handleClick}
        properties={props.properties}
        handleToggle={handleToggle}
        width={props.width}
      />

      <div
        onClick={handleToggle}
        className="relative"
        style={{ width: props.width }}
      >
        <p
          style={{
            display: props.properties.length !== 1 && 'flex',
          }}
          className="gap-2 items-center "
        >
          {props.properties.map((property: string, i: number) => {
            if (property === 'icon') {
              return (
                <img
                  className="w-6 h-4"
                  key={i}
                  src={props.activeData[property]}
                  alt=""
                />
              );
            }

            return (
              <span key={i}>
                {props.activeData[property] ?? 'United States'}
              </span>
            );
          })}
        </p>

        <Rotate toggle={toggle} />
      </div>
    </>

    // </FieldShape>
  );
};

export default Select;
