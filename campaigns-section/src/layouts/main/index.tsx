import { Layout } from 'antd';
import { FC, useCallback, useState } from 'react';

import PageLayout from '../page';
import HeaderOfLayout from './HeaderOfLayout';
import SideBar from './SideBar';

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

        <PageLayout />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
