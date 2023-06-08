type Countries = {
  flag: string;
  country_name: string;
  phone_code: string;
  country_code: string;
}[];

export interface SelectProps {
  activeData: any;
  properties: string | [];
  label?: string;
  width: string;

  data: Countries;

  handleClick: (e: React.MouseEvent<HTMLDataElement>) => void;
  handleToggle?: (e: React.MouseEvent<HTMLDataElement>) => void;
}

export interface OptionsProps {
  activeData: any;
  properties: [] | string;
  width:string

  toggle: boolean;
  options: Countries;
  handleClick: (e: React.MouseEvent<HTMLDataElement>) => void;
  handleToggle?: (e: React.MouseEvent<HTMLDataElement>) => void;
}

export interface OptionProp {
  icon: string;
  country_code: string;

  country_name: string;
  phone_code: string;
}
