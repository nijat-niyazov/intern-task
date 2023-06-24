import { Card, Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';
import { IconOfAbout, IconOfPayPal, IconOfWarning } from '~/assets/icons';
import { fetchData, paymentHistoryEndpoint } from './api';
import CardBody from './body';
import CardFooter from './footer';
import CardHeader from './header';
import './style.css';

interface DataType {
  key: string;
  name: string;
  age: number;
  amount: string;
  tags: string[];
  id: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Extended',
    dataIndex: 'extended',
    key: 'extended',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Device account',
    dataIndex: 'device_account',
    key: 'device_account',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Purchase date	',
    key: 'purchase_date',
    dataIndex: 'purchase_date	',
    // render: (_, { tags }) => (
    //   <>
    //     {tags.map(tag => {
    //       let color = tag.length > 5 ? 'geekblue' : 'green';
    //       if (tag === 'loser') {
    //         color = 'volcano';
    //       }
    //       return (
    //         <Tag color={color} key={tag}>
    //           {tag.toUpperCase()}
    //         </Tag>
    //       );
    //     })}
    //   </>
    // ),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Status',
    key: 'status',
    // dataIndex: 'status',
    render: (_, record) => (
      <Space size="middle">
        <button className="bg-[#6ab04c] px-1.5 py-1 text-white text-[13px] rounded-sm">
          <span>Paid</span>
        </button>
      </Space>
    ),
  },
  {
    title: 'Actions',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <button className="bg-[#fb9a00] px-2 py-1 text-white">
          <span>Download invoice</span>
        </button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    id: 1,
    key: '1',
    name: 'John Brown',
    age: 32,
    amount: '45',
    status: ['nice', 'developer'],
  },
  // {
  //   id: 1,
  //   key: '2',
  //   name: 'Jim Green',
  //   age: 42,
  //   address: 'London No. 1 Lake Park',
  //   tags: ['loser'],
  // },
  
];

const Licensing = () => {
  useEffect(() => {
    fetchData(paymentHistoryEndpoint);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full p-4 gap-x-2 gap-y-2">
      {/* About ✅  */}
      <Card className="md:row-span-2 px-4 ">
        <CardHeader title="About company" icon={<IconOfAbout />} />
        <CardBody listDataOf="aboutData" />
      </Card>
      {/* About ✅  */}

      {/* Sms */}
      <Card className="px-4">
        <CardHeader title="SMS balance" icon={<IconOfWarning />} />
        <CardBody balance />

        <CardFooter buttons={['Purchase']} icon={<IconOfPayPal />} />
      </Card>
      {/* Sms */}

      {/* Device  ✅  */}
      <Card className="md:row-span-2 px-4 ">
        <CardHeader title="Device Licence information" />

        <CardBody listDataOf="deviceData" />
        <CardFooter buttons={['License in use', 'Upgrade License']} />
      </Card>
      {/* Device  ✅  */}

      {/* web feedback */}
      <Card className="px-4">
        <CardHeader title="Web feedback balance" />

        <CardBody balance />

        <CardFooter buttons={['Purchase']} icon={<IconOfPayPal />} />
      </Card>
      {/* web feedback */}

      <Card className="md:col-span-3 px-4">
        <CardHeader title="Payment history" border={false} />

        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  );
};

export default Licensing;
