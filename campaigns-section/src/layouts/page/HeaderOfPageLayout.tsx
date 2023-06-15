import { useLocation } from 'react-router';
import { HeaderButton } from '~/component/buttons';
import { pageLayoutData } from '~/data';

const HeaderOfPageLayout = () => {
  const location = useLocation().pathname.slice(1);

  return (
    <>
      <div
        className={`w-full h-16 bg-[#fffbe6] border-b-2 border-[#ffe58f] flex gap-32 items-center  px-4 py-3 transition-all duration-300`}
      >
        <div className="flex gap-3   leading-4 items-center justify-center">
          <span
            role="img"
            aria-label="exclamation-circle"
            className="anticon anticon-exclamation-circle ant-alert-icon"
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="exclamation-circle"
              width="1em"
              height="1em"
              fill="orange"
              aria-hidden="true"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path>
            </svg>
          </span>
          <span>
            Your are using trial license. Trial period is going to be expire in
            12 days on Jun 27, 2023. Upgrade your license to continue using the
            system.
          </span>
        </div>
        <button>x</button>
      </div>

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
    </>
  );
};

export default HeaderOfPageLayout;
