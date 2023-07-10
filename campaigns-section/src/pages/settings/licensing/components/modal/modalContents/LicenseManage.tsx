import { Table } from 'antd';
import Column from 'antd/es/table/Column';
import useSWR from 'swr';
import { fetchData } from '../../../api';
import { licenceInUseEndpoint } from '../../../api/endpoints';
import { licenseManageColumns } from '../../../constants/constants';

// const tableData: LicenseManageDataType[] = [
//   {
//     id: 842,
//     name: 'Maldova',
//     username: 'maldova',
//     branch: 'Maldova',
//     last_login: '2023-07-07T15:34:15.090554Z',
//     is_offline_mode: true,
//     any_problem: false,
//     status: 'logout',
//   },
//   {
//     id: 805,
//     name: 'xenia',
//     username: 'xenia',
//     branch: 'xenia',
//     last_login: '2023-06-30T22:11:21.484546Z',
//     is_offline_mode: false,
//     any_problem: true,
//     status: 'login',
//   },
//   {
//     id: 799,
//     name: '11maycondition',
//     username: '11maycond',
//     branch: 'condition',
//     last_login: '2023-05-19T20:13:12.110083Z',
//     is_offline_mode: false,
//     any_problem: false,
//     // "time_zone": 4,
//     status: 'logout',
//   },
//   {
//     id: 808,
//     name: 'bb',
//     username: 'bb',
//     branch: 'bb',
//     last_login: '2023-05-18T10:47:32.793000Z',
//     is_offline_mode: true,
//     any_problem: false,
//     status: 'logout',
//   },
//   {
//     id: 802,
//     name: 'ell',
//     username: 'ell',
//     branch: 'ell',
//     last_login: '2023-05-17T08:04:52.970816Z',
//     is_offline_mode: true,
//     any_problem: false,
//     status: 'logout',
//   },
//   {
//     id: 789,
//     name: 'qrabb',
//     username: 'qrabb',
//     branch: 't',
//     last_login: '2023-05-02T10:04:56.578090Z',
//     is_offline_mode: false,
//     any_problem: true,
//     status: 'login',
//   },
//   {
//     id: 751,
//     name: 'con',
//     username: 'con',
//     branch: 'nazar',
//     last_login: '2023-04-19T13:18:54.675538Z',
//     is_offline_mode: true,
//     any_problem: true,
//     status: 'login',
//   },
//   {
//     id: 157,
//     name: 'shop',
//     username: 'shop',
//     branch: 'Test',
//     last_login: '2022-12-06T09:09:32.267434Z',
//     is_offline_mode: true,
//     any_problem: false,
//     status: 'logout',
//   },
//   {
//     id: 156,
//     name: '2xlmeShopping',
//     username: '2xlme',
//     branch: '2xlme',
//     last_login: '2022-12-06T07:58:33.977413Z',
//     is_offline_mode: false,
//     any_problem: true,
//     status: 'login',
//   },
//   {
//     id: 152,
//     name: 'voice1',
//     username: 'voice1',
//     branch: 't',
//     last_login: '2022-11-18T00:05:36.828119Z',
//     is_offline_mode: false,
//     any_problem: false,
//     status: 'logout',
//   },
//   {
//     id: 7,
//     name: 'basic',
//     username: 'basic',
//     branch: 'basic',
//     last_login: '2022-05-06T15:21:09.047138Z',
//     is_offline_mode: false,
//     any_problem: false,
//     status: 'login',
//   },
// ];

const LicenseManage = ({ data, query }: { data: any; query: string }) => {
  const { data: modalData } = useSWR(
    query ? licenceInUseEndpoint + '?username=' + query : null,
    fetchData
  );

  return (
    <>
      <div>
        <span>
          Total count: {modalData?.total_count ?? data?.total_count} |
        </span>

        <span>
          Filtered count: {modalData?.filtered_count ?? data?.filtered_count}
        </span>
      </div>

      <Table dataSource={modalData?.data ?? data?.data} pagination={false}>
        {licenseManageColumns.map((col: any, i: number) => {
          return <Column key={i} {...col} />;
        })}
      </Table>
    </>
  );
};

export default LicenseManage;
