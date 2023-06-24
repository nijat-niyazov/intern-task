import { Layout } from 'antd';
import { FC, useCallback, useState } from 'react';
import { Modal } from '~/components';
import BodyOfPageLayout from '../page/body';
import HeaderOfPageLayout from '../page/header';
import HeaderOfAppLayout from './header';
import SideBar from './sidebar';

const MainLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  return (
    <Layout>
      <SideBar collapsed={collapsed} />

      <Layout>
        <HeaderOfAppLayout handleCollapsed={handleCollapsed} />
        
        <Modal />
        
        <HeaderOfPageLayout />
        <BodyOfPageLayout />
      
      </Layout>
    </Layout>
  );
};

export default MainLayout;
