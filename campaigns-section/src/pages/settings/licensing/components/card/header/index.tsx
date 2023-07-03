import { FC, ReactNode } from 'react';
import useHandleModal from '../../modal/useHandleModal';

interface CardHeaderProps {
  title: string;
  icon?: ReactNode;
  border?: boolean;
  balance?: any;
  cacheKey?: string;
  searchable?: boolean;
  openModalType?: string;
}

const CardHeader: FC<CardHeaderProps> = ({
  title,
  icon,
  border = true,
  balance,
  openModalType,
}) => {
  let handleClick;

  if (openModalType) {
    handleClick = useHandleModal(openModalType);
  }

  return (
    <header
      style={{
        borderBottomWidth: border ? '2px' : '0px',
      }}
      className="border-gray-300 border-b-4 h-12 flex items-center justify-between rounded-md"
    >
      <h4 className="font-semibold text-[#555]">
        {title} {balance}
      </h4>

      {icon && (
        <button
          onClick={handleClick}
          type="button"
          className="bg-[#335c9a] text-white inline-block px-2 py-2 border-none"
        >
          <span>{icon}</span>
        </button>
      )}
    </header>
  );
};

export default CardHeader;
