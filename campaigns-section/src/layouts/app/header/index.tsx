import { Button } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { memo } from 'react';

const HeaderOfLayout = ({
  handleCollapsed,
}: {
  handleCollapsed: () => void;
}) => {
  return (
    <Header
      style={{
        padding: 0,
        height: '62px',
      }}
      className="w-full bg-[#444A58]"
    >
      <Button
        type="text"
        // icon={<MenuIcon />}
        className="text-white"
        onClick={handleCollapsed}
        style={{
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
};

export default memo(HeaderOfLayout);
