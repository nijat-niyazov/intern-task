import { Table } from 'antd';

interface MyData {
  id: number;
  name: string;
  username: string;
  branch: string;
  last_login: string;
  is_offline_mode: boolean;
  any_problem: boolean;
  time_zone: number;
  status: string;
}

const tableData: MyData[] = [
  {
    id: 231,
    name: 'ABBcondition',
    username: 'abbcondition',
    branch: 'JULTEST',
    last_login: '2022-10-23T17:25:45.639850Z',
    is_offline_mode: false,
    any_problem: false,
    time_zone: 4,
    status: 'logout',
  },
];

const LicenseManage = ({ data }: { data: any }) => {
  console.log(data);

  return (
    <Table
      className="px-10 py-5"
      scroll={{ x: 500 }}
      size="small"
      dataSource={tableData}
    >
      {/* {licenseManageColumns.map(column => (
        <Column {...column} className='text-xs' />
      ))} */}
    </Table>
  );
};

export default LicenseManage;
