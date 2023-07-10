import { SearchOutlined } from '@ant-design/icons';
import { Modal as AntModal, Input } from 'antd';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { handleShowModal, isModalOpened } from '~/redux/licenseModalSlice';
import { fetchData } from '../../api';
import { useDebouncedValue } from '../../customHooks';
import { AlertContent, LicenseManage, SmsContent } from './modalContents';
import LicenseUgrade from './modalContents/LicenseUpgrade';

interface ModalProps {
  title: string;
  isModalOpen?: boolean;
  width?: string;
  hasFooter?: true;
  cacheKey?: string;
  searchable?: true;
  children?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({
  title,
  width,
  // hasFooter = false,
  cacheKey,
  searchable = false,
}) => {
  const [query, setQuery] = useState<string>('');
  
  const debounced = useDebouncedValue(query);
  
  const dispatch = useDispatch();

  const hideModal = () => {
    setQuery('');
    dispatch(handleShowModal(false));
  };

  const isModalOpen = useSelector(isModalOpened);

  const { data: modalData, isLoading } = useSWR(
    isModalOpen ? cacheKey : null,
    fetchData
  );

  let content;

  if (cacheKey?.includes('alert')) {
    content = <AlertContent data={modalData} />;
  }

  if (cacheKey?.includes('sms')) {
    content = <SmsContent data={modalData} query={debounced} />;
  }

  if (cacheKey?.includes('use')) {
    content = <LicenseManage data={modalData} query={debounced} />;
  }

  if (cacheKey?.includes('upgrade')) {
    content = <LicenseUgrade />;
  }

  return (
    <AntModal
      title={
        <div className="flex justify-between">
          <span>{title}</span>
          <button onClick={hideModal}>X</button>
        </div>
      }
      open={isModalOpen}
      onCancel={hideModal}
      footer={null}
      centered
      width={width}
      closable={false}
      // destroyOnClose={true}
    >
      {searchable && (
        <Input
          value={query}
          className="ml-auto flex m-4 "
          placeholder="Search"
          onChange={e => setQuery(e.target.value)}
          disabled={isLoading}
          style={{ width: 300 }}
          prefix={<SearchOutlined className="mr-2" />}
          addonAfter={null}
        />
      )}

      {isLoading ? <h1>Loading...</h1> : content}
      {/* {content} */}
    </AntModal>
  );
};

export default Modal;
