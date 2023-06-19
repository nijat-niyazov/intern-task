import { Layout } from 'antd';
import { FC, useCallback, useState } from 'react';
import { Modal } from '~/components';
import PageLayout from '../page';
import HeaderOfLayout from './header';
import SideBar from './side';

const MainLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  return (
    <Layout>
      <SideBar collapsed={collapsed} />

      <Layout>
        <HeaderOfLayout handleCollapsed={handleCollapsed} />
        <Modal />
        <PageLayout />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
