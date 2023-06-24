import { Table } from 'antd';
import { FC } from 'react';
import { useParams } from 'react-router';
import { allData } from '~/utils/tableData';

const TableData: FC = () => {
  const { section } = useParams();

  return (
    <Table
      columns={allData[section]?.columns}
      dataSource={allData[section]?.data}
      size="small"
    />
  );
};

export default TableData;
