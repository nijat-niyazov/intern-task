import {
  ForkOutlined,
  MessageFilled,
  SettingFilled,
  SmileFilled,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const items: MenuItem[] = [
  getItem(
    <Link to="/feedback">FeedBack Templates</Link>,
    '1',
    <ForkOutlined />
  ),
  getItem(<Link to="/customers">Customers</Link>, '2', <SmileFilled />),

  getItem('Campaigns', 'sub1', <MessageFilled />, [
    getItem(<Link to="/campaigns/campaign">Campaign</Link>, '5'),
    getItem(<Link to="/campaigns/sms">SMS template</Link>, '6'),
    getItem(<Link to="/campaigns/email">Email template</Link>, '7'),
  ]),
  getItem('Settings', 'sub2', <SettingFilled />, [
    getItem(<Link to="/settings/licensing">Licensing</Link>, '8'),
  ]),
];
