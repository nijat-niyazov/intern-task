import { FC, ReactNode } from 'react';

interface CardHeaderProps {
  title: string;
  icon?: ReactNode;
  border?: true | false;
}

const CardHeader: FC<CardHeaderProps> = ({ title, icon, border = true }) => {
  return (
    <header
      style={{
        borderBottomWidth: border ? '1px' : '0px',
      }}
      className="border-gray-300 h-12 flex items-center justify-between"
    >
      <h4 className="font-semibold text-[#555]">{title}</h4>

      {icon && (
        <button
          type="button"
          className="bg-[#335c9a] text-white inline-block px-2 py-2"
        >
          <span>{icon}</span>
        </button>
      )}
    </header>
  );
};

export default CardHeader;
