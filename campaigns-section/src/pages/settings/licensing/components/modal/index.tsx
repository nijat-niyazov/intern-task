import { SearchOutlined } from '@ant-design/icons';
import { Modal as AntModal, Input } from 'antd';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { handleShowModal, isModalOpened } from '~/redux/licenseModalSlice';
import { fetchData } from '../../api';
import {
  AlertContent,
  LicenseManage,
  LicenseUpdate,
  SmsContent,
} from './modalContents';

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
  // width,
  hasFooter = false,
  cacheKey,
  searchable = false,
  // children,
}) => {
  const [query, setQuery] = useState<string>('');
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
    content = <SmsContent data={modalData} query={query} />;
  }

  if (cacheKey?.includes('use')) {
    content = <LicenseManage data={modalData} />;
  }

  if (cacheKey?.includes('upgrade')) {
    content = <LicenseUpdate />;
  }

  return (
    <AntModal
      title={title}
      open={isModalOpen}
      onCancel={hideModal}
      footer={null}
      // width={width}
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

      {/* {hasFooter && (
        <div className="flex gap-2 justify-end mr-4 border-none py-2">
          <Button onClick={hideModal} label="Cancel" type="default" />
          <Button onClick={hideModal} label="Save" type="primary" />
        </div>
      )} */}
    </AntModal>
  );
};

export default Modal;
