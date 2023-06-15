import MenuIcon from '@mui/icons-material/Menu';
import { Button, Layout, Menu, theme } from 'antd';
import { FC, useState } from 'react';
import { Outlet } from 'react-router';
import QmeterLogo from '../assets/QmeterLogo';

const { Header, Sider, Content } = Layout;

const MainLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <QmeterLogo collapsed={collapsed} />
        <div className="demo-logo-vertical" />

        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          items={[
            {
              icon: <MenuIcon />,
              label: 'nav 1',
            },
            {
              // icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              // icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />

        {/* <Menu
          // className="bg-[#444a59] text-white"
          // mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              icon: <MenuIcon />,
              label: 'nav 1',
            },
            {
              // icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              // icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        /> */}
      </Sider>

      <Layout>
        <Header
          style={{
            position: 'fixed',
            padding: 0,
          }}
          className="w-full bg-[#444A58] hover:bg-[#444A58] hover:text-white "
        >
          <Button
            type="text"
            icon={<MenuIcon />}
            className="text-white hover:text-white text-lg w-20"
            onClick={() => setCollapsed(prev => !prev)}
            style={{
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
