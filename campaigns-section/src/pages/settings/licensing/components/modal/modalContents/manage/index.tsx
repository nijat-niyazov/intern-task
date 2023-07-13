import { Select, Spin, Table } from 'antd';
import Column from 'antd/es/table/Column';
import { Dispatch, SetStateAction, useState } from 'react';
import useSWR from 'swr';
import { fetchFilteredData } from '~/api/license';
import { licenceInUseEndpoint } from '~/api/license/endpoints';
import { licenseManageColumns } from '~/constants/license/constants';

const LicenseManage = ({ data, query }: { data: any; query: string }) => {
  const userNamesOpts = data?.data.map((user: any) => ({
    value: user.username,
    label: user.username,
  }));

  const namesOpts = data?.data.map((user: any) => ({
    value: user.name,
    label: user.name,
  }));

  const handleOptions =
    (setState: Dispatch<SetStateAction<any>>) => (value: string) => {
      setState(value);
    };

  const [userNames, setUserNames] = useState<string[] | []>([]);
  const [names, setNames] = useState<string[] | []>([]);

  const { data: modalData, isLoading } = useSWR(
    query || userNames.length !== 0
      ? [licenceInUseEndpoint, { username: userNames, name: names, query }]
      : null,
    fetchFilteredData
  );

  return (
    <div className="px-10">
      <div className="absolute top-16">
        <span>
          Total count: {modalData?.total_count ?? data?.total_count} |
        </span>

        <span>
          Filtered count: {modalData?.filtered_count ?? data?.filtered_count}
        </span>
      </div>

      <div className="flex gap-5">
        <Select
          disabled={isLoading}
          mode="tags"
          style={{ width: '25%' }}
          placeholder="Tags Mode"
          onChange={handleOptions(setUserNames)}
          options={userNamesOpts}
        />

        <Select
          disabled={isLoading}
          mode="tags"
          style={{ width: '25%' }}
          placeholder="Tags Mode"
          onChange={handleOptions(setNames)}
          options={namesOpts}
        />
      </div>
      {isLoading ? (
        <div className="my-5 mb-5 py-7 px-12 text-center rounded-sm bg-gray-100">
          <Spin />
        </div>
      ) : (
        <Table
          className="pb-10"
          scroll={{ y: 350 }}
          dataSource={modalData?.data ?? data?.data}
          pagination={false}
        >
          {licenseManageColumns.map((col: any, i: number) => {
            return <Column key={i} {...col} />;
          })}
        </Table>
      )}
    </div>
  );
};

export default LicenseManage;
