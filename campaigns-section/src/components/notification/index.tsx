import { useState } from 'react';

const Notification = () => {
  const [hideNotification, setHideNotification] = useState(false);

  return (
    <div
      className={` ${
        hideNotification
          ? 'grid-rows-[0fr]'
          : 'grid-rows-[1fr] border-b-2 border-[#ffe58f] py-3'
      } grid  bg-[#fffbe6]  gap-10  px-4 transition-all duration-300 overflow-hidden`}
    >
      <div className="w-full overflow-hidden flex items-center justify-between">
        <div className="flex gap-3  leading-5 items-center">
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
            12 days on Jun 27, 2023. <b> Upgrade </b> your license to continue
            using the system.
          </span>
        </div>

        <button className="text-xl" onClick={() => setHideNotification(true)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Notification;
