import { Button } from 'antd';
import { FC, ReactNode } from 'react';

interface FooterDataProps {
  buttons: string[];
  icon?: ReactNode;
}

const CardFooter: FC<FooterDataProps> = ({ icon, buttons }) => {
  return (
    <>
      <div className="flex ml-auto items-center gap-4 w-1/2">
        {icon && <span className="w-24 ">{icon}</span>}
        {buttons.map((btn, i) => (
          <Button
            key={i}
            type={i === buttons.length - 1 ? 'primary' : 'default'}
            style={{
              backgroundColor: i === buttons.length - 1 ? '#335c9a' : '',
              borderRadius: '0px',
            }}
          >
            {btn}
          </Button>
        ))}
      </div>
    </>
  );
};

export default CardFooter;
