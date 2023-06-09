import { OptionProps } from '../../../../interfaces/form';

const Option = (props: OptionProps) => {
  return props.properties.map((property: string, i: number) =>
    property === 'icon' ? (
      <img
        key={i}
        className="w-6 h-4"
        src={props.activeData[property] ?? ''}
        alt="icon"
      />
    ) : (
      <span key={i}>{props.activeData[property] ?? property}</span>
    )
  );
};

export default Option;
