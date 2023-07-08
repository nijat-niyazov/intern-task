import { FC, ReactNode } from 'react';
import useHandleModal from '../../modal/useHandleModal';

interface CardHeaderProps {
  title: string;
  icon?: ReactNode;
  border?: boolean;
  dynamicValue?: any;
  cacheKey?: string;
  searchable?: boolean;
  openModalType?: string;
}

const CardHeader: FC<CardHeaderProps> = ({
  title,
  icon,
  dynamicValue,
  openModalType,
  border=true,
}) => {
  let handleClick;

  if (openModalType) {
    handleClick = useHandleModal(openModalType);
  }

  return (
    <header
      style={{
        border: !border && 'none',
      }}
      className="border-gray-200 flex items-center justify-between h-10 border-b-[1px] pb-2"
    >
      <h4 className="font-semibold text-sm  text-[#555]">
        {title} {dynamicValue}
      </h4>

      {icon && (
        <button
          onClick={handleClick}
          type="button"
          className="bg-[#335c9a] text-white inline-block px-2 py-2 border-none border-gray-300
          border-b-2 rounded-sm"
        >
          <span className="border-b-4 border-gray-800">{icon}</span>
        </button>
      )}
    </header>
  );
};

export default CardHeader;
