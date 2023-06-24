import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router';

const BodyOfPageLayout: React.FC = () => {
  return (
    <Content className="flex flex-col md:flex-row my-2 md:m-4 gap-4 items-start">
      <Outlet />
    </Content>
  );
};

export default BodyOfPageLayout;
