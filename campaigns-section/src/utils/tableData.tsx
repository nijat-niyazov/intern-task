import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

interface DataType {
  key: string;
  id: number;
  name: string;
  type?: string;
  count?: string[];
  created?: string;
  date?: any;
  actions: {
    label: string;
    background: string;
  }[];
}

const campaignColumns: ColumnsType<DataType> = [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Created by',
    dataIndex: 'created',
    key: 'created',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },

  {
    title: 'Count',
    dataIndex: 'count',
    key: 'count',
    render: (_, record) => (
      <ul className="flex flex-col gap-1">
        {record.count?.map((info, i) => (
          <li key={i}>{info}</li>
        ))}
      </ul>
    ),
  },

  {
    title: 'Actions',
    key: 'action',
    render: (_, record) => {
      return (
        <div className="flex gap-2 w-10">
          {record.actions.map((action, i) => {
            return (
              <Link
                key={i}
                to={'sms-view/' + record.id}
                style={{
                  backgroundColor: action?.background,
                }}
                className="bg-amber-500 px-4 py-2 hover:bg-amber-400 focus-within:outline-none border-none hover:text-white text-white"
              >
                {action.label}
              </Link>
            );
          })}
        </div>
      );
    },
  },
];

const smsColumns: ColumnsType<DataType> = [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Actions',
    key: 'action',
    render: (_, record) => {
      return (
        <div className="flex gap-2 w-10">
          {record.actions.map((action, i) => {
            return (
              <Link
                key={i}
                to={'sms-view/' + record.id}
                style={{
                  backgroundColor: action?.background,
                }}
                className="bg-amber-500 px-4 py-2 hover:bg-amber-400 focus-within:outline-none border-none hover:text-white text-white"
              >
                {action.label}
              </Link>
            );
          })}
        </div>
      );
    },
  },
];

const campaignData: DataType[] = [
  {
    key: '1',
    id: 1,
    name: 'John Brown',
    count: ['0 sent', '0 approved', '0 read'],
    type: 'SMS',
    date: new Date().toLocaleDateString('en-US'),
    created: 'Nijat Niyazov',
    actions: [{ label: 'View', background: 'orange' }],
  },
  {
    key: '2',
    id: 2,
    name: 'Jim Green',
    count: ['0 sent', '0 approved', '0 read'],
    type: 'SMS',
    date: new Date().toLocaleDateString('en-US'),
    created: 'Nijat Niyazov',
    actions: [{ label: 'View', background: 'orange' }],
  },
  {
    key: '3',
    id: 3,
    name: 'Joe Black',
    type: 'SMS',
    count: ['0 sent', '0 approved', '0 read'],
    date: new Date().toLocaleDateString('en-US'),
    created: 'Nijat Niyazov',
    actions: [
      { label: 'Delete', background: 'orangered' },
      { label: 'Edit', background: 'green' },
    ],
  },
];

const smsData: DataType[] = [
  {
    key: '1',
    id: 1,
    name: 'thanks template',
    actions: [
      { label: 'Delete', background: 'orangered' },
      { label: 'Edit', background: 'green' },
    ],
  },
  {
    key: '2',
    id: 2,
    name: 'help template',
    actions: [
      { label: 'Delete', background: 'orangered' },
      { label: 'Edit', background: 'green' },
    ],
  },
];

export const allData = {
  sms: {
    columns: smsColumns,
    data: smsData,
  },
  campaign: {
    columns: campaignColumns,
    data: campaignData,
  },
};
