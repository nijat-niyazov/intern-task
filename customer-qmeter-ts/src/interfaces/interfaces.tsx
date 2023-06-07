type FormDataType = {
  value: string | number;
  placeHolder: string;
  label: string;
  type?: string;
};

export interface InitialFormData {
  name: FormDataType;
  email: FormDataType;
}

export interface InputProps {
  value: number | string;
  placeHolder: string;
  label: string;
  id: string;
  name: string;
  type?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleState: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SetCookie{
  activeCountry:string
}

export interface SelectProps {
  activeData: any;
  property? :string
  label?: string;

  countries: {
    flag: string;
    country_name: string;
    phone_code: string;
    country_code: string;
  }[];

  handleClick: (e: React.MouseEvent<HTMLDataElement>) => void;
  handleToggle?: (e: React.MouseEvent<HTMLDataElement>) => void;

  toggle?: boolean;
}

export interface OptionsProps {
  toggle: boolean;
  countries: {
    flag: string;
    country_name: string;
    phone_code: string;
    country_code: string;
  }[];
  // handleToggle: () => void;
}

export interface FieldShapeProps {
  label?: string;
  children: React.ReactNode;
}

export interface RotateProps {
  toggle: boolean;
  position: string | number;
}

export interface SubmitButtonProps {
  children: string;
}

export type DataOfFetch = {
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  idd?: {
    root: string;
    suffixes: string;
  };
  cca2: 'string';
};

export interface ImageTypes {
  [country_code: string]: string;
}

export interface FormBackgroundImage {
  backgroundImage: string;
}
