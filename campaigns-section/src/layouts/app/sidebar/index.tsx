import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { memo } from 'react';
import { QmeterLogo } from '~/assets';
import { items } from '~/utils/sidebarItems';


const SideBar = ({ collapsed }: { collapsed: boolean }) => {
  
  return (
    <Sider
      className="max-h-[2500px]"
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <QmeterLogo collapsed={collapsed} />

      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        className="bg-[#444A58] overflow-hidden py-0.3 h-screen"
      />
    </Sider>
  );
};

export default memo(SideBar);




