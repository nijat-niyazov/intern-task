import { Dropdown, MenuProps } from 'antd';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Notification } from '~/components';
import { handleModal, typeOfModal } from '~/redux/modalSlice';
import { pageLayoutData } from '~/utils/data';

const items: MenuProps['items'] = [
  {
    label: <Link to="/sms_thread">Sms</Link>,
    key: '0',
  },
  {
    label: <Link to="/email_thread">Email</Link>,
    key: '1',
  },
];

const HeaderOfPageLayout: FC = () => {
  const location = useLocation().pathname.split('/').at(-1);

  const dispatch = useDispatch();

  return (
    <>
      <Notification />

      <div className="w-full bg-white px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="font-light">
            <h1 className="text-2xl"> {pageLayoutData[location]?.header} </h1>
            <h1 className="text-gray-400 italic 5tracking-wide">
              {pageLayoutData[location]?.purpose}
            </h1>
          </div>

          {pageLayoutData[location]?.headerButton ? (
            location === 'campaign' ? (
              <Dropdown menu={{ items }} trigger={['click']}>
                <button
                  className="bg-green-500 px-4 py-1 text-white"
                  type="button"
                >
                  {pageLayoutData[location]?.headerButton}
                </button>
              </Dropdown>
            ) : (
              <button
                onClick={() => {
                  dispatch(handleModal(true));
                  dispatch(typeOfModal(location));
                }}
                className="bg-green-500 px-4 py-1 text-white"
                type="button"
              >
                {pageLayoutData[location]?.headerButton}
              </button>
            )
          ) : null}
        </div>
      </div>
    </>
  );
};

export default HeaderOfPageLayout;
