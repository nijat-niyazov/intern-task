import { useLocation } from 'react-router';
import { HeaderButton } from '~/component/buttons';
import { pageLayoutData } from '~/data';

const HeaderOfPageLayout = () => {
  const location = useLocation().pathname.slice(1);

  return (
    <div className="w-full bg-white px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="font-light">
          <h1 className="text-2xl"> {pageLayoutData[location]?.header} </h1>
          <h1 className="text-gray-400 italic tracking-wide">
            {pageLayoutData[location]?.purpose}
          </h1>
        </div>
        <HeaderButton action={pageLayoutData[location]?.headerButton} />
      </div>
    </div>
  );
};

export default HeaderOfPageLayout;
