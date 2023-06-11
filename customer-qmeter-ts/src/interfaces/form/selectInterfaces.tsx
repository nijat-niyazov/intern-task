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
  handleRotate?:
    | ((e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void)
    | undefined;
}

export interface OptionsProps {
  activeData: any;
  properties: string[];
  width: string;

  rotated: boolean;
  options: Countries;
  handleClick: (e: React.MouseEvent<HTMLDataElement>) => void;
  handleRotate?:
    | ((e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void)
    | undefined;
}

export interface OptionProp {
  activeData: any;
  properties: string | [];
  option: any;
}
