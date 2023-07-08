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
    <div className="flex flex-wrap mt-5 mb-2 gap-2 justify-end">
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
          className="rounded-md"
        >
          {btn}
        </Button>
      ))}
    </div>
  );
};

export default CardFooter;
