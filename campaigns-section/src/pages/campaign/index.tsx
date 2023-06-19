import { Card, Table } from 'antd';
import Search from 'antd/es/input/Search';
import { allData } from '../tableData';

const Campaign: React.FC = () => {
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
        columns={allData.campaigns.columns}
        dataSource={allData.campaigns.data}
        size="small"
      />
    </Card>
  );
};

export default Campaign;
