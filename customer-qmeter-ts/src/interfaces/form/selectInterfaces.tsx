type Countries = {
  flag: string;
  country_name: string;
  phone_code: string;
  country_code: string;
}[];

export interface OptionProps {
  properties: string[];
  activeData: any;
  test?: string;
}

export interface SelectProps {
  activeData: any;
  properties: string[];
  label?: string;
  width: string;

  data: Countries;

  handleClick: (e: React.MouseEvent<HTMLDataElement>) => void;
  handleRotate?: (e: React.MouseEvent<HTMLDataElement>) => void;
}

export interface OptionsProps {
  activeData: any;
  properties: string[];
  width: string;

  rotated: boolean;
  options: Countries;
  handleClick: (e: React.MouseEvent<HTMLDataElement>) => void;
  handleRotate?:
    | ((e: React.MouseEvent<HTMLDataElement, MouseEvent>) => void)
    | undefined;
}

export interface OptionProp {
  activeData: any;
  properties: string | [];
  option: any;
  // handleClick: (e: React.MouseEvent<HTMLDataElement>) => void;
  // handleToggle?: (e: React.MouseEvent<HTMLDataElement>) => void;

  // icon: string;
  // country_code: string;
  // country_name: string;
  // phone_code: string;
}
