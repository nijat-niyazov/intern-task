import { Card } from 'antd';
import Search from 'antd/es/input/Search';
import React, { memo } from 'react';
import { Outlet } from 'react-router';

const CampaignPagesLayout: React.FC = () => {
  return (
    
    <Card className="w-full">
      <Search
        placeholder="Search..."
        style={{
          maxWidth: '50%',
          minWidth: '10%',
          marginLeft: 'auto',
          display: 'flex',
          marginBottom: '20px',
        }}
      />

      <Outlet />
    </Card>
  );
};

export default memo(CampaignPagesLayout);
