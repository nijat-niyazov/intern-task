import { Button } from 'antd';
import { FC, ReactNode } from 'react';
import useHandleModal from '../../modal/useHandleModal';

interface FooterDataProps {
  buttons: string[];
  icon?: ReactNode;
  openModalType?: string;
}

const CardFooter: FC<FooterDataProps> = ({ icon, buttons, openModalType }) => {
  
  let handleClick: any;

  if (openModalType) {
    handleClick = useHandleModal(openModalType);
  }

  return (
    <div className="flex ml-auto items-center gap-4 w-auto justify-end">
      {icon && <span className="w-24 ">{icon}</span>}
      {buttons.map((btn, i) => (
        <Button
          key={i}
          type={i === buttons.length - 1 ? 'primary' : 'default'}
          style={{
            backgroundColor: i === buttons.length - 1 ? '#335c9a' : '',
            borderRadius: '0px',
          }}
          onClick={handleClick}
        >
          {btn}
        </Button>
      ))}
    </div>
  );
};

export default CardFooter;
