import { Button as AntButton } from 'antd';

const Button = ({
  type,
  label,
  onClick,
  htmlType,
  disabled=false
}: {
  type: string;
  disabled?:boolean
  label: string;
  htmlType?: 'submit' | 'reset'; 
  onClick?: () => void;
}) => {
  let className;

  if (type === 'default') {
    className = 'border-[1px] border-gray-300 rounded-sm disabled:opacity-70 ';
  }

  if (type === 'primary') {
    className = 'bg-[#335c9a] rounded-sm text-white hover:!text-white disabled:opacity-70';
  }

  return (
    <AntButton
      htmlType={htmlType ? htmlType : 'button'}
      onClick={onClick}
      disabled={disabled}
      className={className}
      // href='https://www.paypal.com/checkoutnow?token=1BY922753K601543D'
    >
      {label}
    </AntButton>
  );
};

export default Button;
