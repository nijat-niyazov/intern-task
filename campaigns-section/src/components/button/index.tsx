import { Button as AntButton } from 'antd';
import { memo } from 'react';

const Button = ({
  type,
  label,
  onClick,
  htmlType,
  disabled = false,
}: {
  type: string;
  disabled?: boolean;
  label: string;
  htmlType?: 'submit' | 'reset';
  onClick?: () => void;
}) => {
  let className;

  switch (type) {
    case 'default':
      className =
        'border-[1px] border-gray-300 rounded-sm disabled:opacity-70 ';
      break;

    case 'primary':
      className =
        'bg-[#335c9a] rounded-sm text-white hover:!text-white disabled:opacity-70';
      break;
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

export default memo(Button);
