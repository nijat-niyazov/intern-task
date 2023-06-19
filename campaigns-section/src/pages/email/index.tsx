import { Card, Table } from 'antd';
import Search from 'antd/es/input/Search';
import { FC } from 'react';
import { allData } from '../tableData';

const Email: FC = () => {
  return (
    <Card style={{ width: '100%' }}>
      <Search
        placeholder="Search..."
        style={{
          width: 400,
          marginLeft: 'auto',
          display: 'flex',
          marginBottom: '20px',
        }}
      />

      <Table
        columns={allData.sms.columns}
        dataSource={allData.sms.data}
        size="small"
      />
    </Card>
  );
};

export default Email;
