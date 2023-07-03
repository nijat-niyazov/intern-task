import { Modal as AntModal } from 'antd';
import Search from 'antd/es/input/Search';
import { FC, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';
import { handleShowModal } from '~/redux/licenseModalSlice';
import { fetchData } from '../../api';
import { AlertContent, LicenseManage, SmsContent } from './contents';

interface ModalProps {
  title: string;
  isModalOpen: boolean;
  width: string;
  hasFooter: boolean;
  cacheKey?: string;
  searchable: boolean;
}

const ModalComponent: FC<ModalProps> = ({
  title,
  width,
  hasFooter,
  cacheKey,
  searchable,
  isModalOpen,
}) => {
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch();

  const hideModal = () => {
    setQuery('');
    dispatch(handleShowModal(false));
  };

  const { data: modalData, isLoading } = useSWR(
    isModalOpen ? cacheKey : null,
    fetchData
  );

  const filtered = useMemo(() => {
    if (cacheKey?.includes('sms')) {
      return modalData?.filter((eachData: any) =>
        eachData.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  }, [modalData, query]);

  let content;

  if (cacheKey) {
    if (cacheKey.includes('sms')) {
      content = <SmsContent filtered={filtered} />;
    }

    if (cacheKey.includes('alert')) {
      content = <AlertContent />;
    }

    if (cacheKey.includes('use')) {
      content = <LicenseManage />;
    }
  }

  return (
    <AntModal
      title={title}
      open={isModalOpen}
      onCancel={hideModal}
      footer={null}
      width={width}
    >
      {searchable && (
        <Search
          value={query}
          className="ml-auto flex py-4 pr-10"
          placeholder="Search"
          onChange={e => setQuery(e.target.value)}
          disabled={isLoading}
          style={{ width: 300 }}
        />
      )}

      {isLoading && !filtered ? <h1>Loading...</h1> : content}

      {hasFooter && (
        <div className="flex gap-2 justify-end mr-4 border-none py-2">
          <button
            onClick={hideModal}
            className="border-[1px] py-1 px-3 border-black rounded-sm"
          >
            Cancel
          </button>
          <button className="bg-[#335c9a] py-0 border-none text-white px-4 rounded-sm">
            <span>Save</span>
          </button>
        </div>
      )}
    </AntModal>
  );
};

export default ModalComponent;
