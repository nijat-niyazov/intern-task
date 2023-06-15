import { theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { FC } from 'react';
import { Outlet } from 'react-router';
import HeaderOfPageLayout from './HeaderOfPageLayout';

const PageLayout: FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <HeaderOfPageLayout
      // header={'Feedback templates'}
      // purpose={'You can manage your templates from this section.'}
      />
      <Content
        style={{
          background: colorBgContainer,
        }}
        className="m-4 overflow-x-hidden"
      >
        <Outlet />
      </Content>
    </>
  );
};

export default PageLayout;
