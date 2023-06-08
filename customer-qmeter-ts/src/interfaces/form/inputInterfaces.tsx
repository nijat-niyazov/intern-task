export interface InputProps {
  value: number | string;
  placeholder: string;
  label: string;
  id: string;
  name: string;
  type?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleState: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectable?: boolean;
  activeData: any;
  properties: string | [];
  data: any;
  width: string;
}
