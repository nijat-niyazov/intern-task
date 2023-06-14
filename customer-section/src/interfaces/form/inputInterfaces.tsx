export interface InputProps {
  name: string;
  value: number | string;
  // label: string;
  id: string;
  placeholder: string;
  type?: string;
  handleState: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // selectable?: boolean;
  // activeData: any;
  // properties: string | [];
  // data: any;
  // width: string;
}
