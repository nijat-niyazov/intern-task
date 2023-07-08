import { DeviceType, FeedbackType, SmsType } from '~/assets/icons';
import { handleDownloadPDF } from '../api';
import { currencyFormatter, dateFormatter } from '../utils';

const paymentHistoryColumns = [
  {
    ellipsis: true,
    title: '#',
    dataIndex: 'id',
    key: 'id',
    width: '5%',
    render: (currentData: any, wholeData: any, i: number) => {
      return <span> {i + 1}</span>;
    },
  },
  {
    ellipsis: true,
    title: 'Extended',
    dataIndex: 'extended',
    key: 'extended',
    width: '8%',
    render: (currentData: string | null) => {
      return <span> {currentData == null ? '0 month' : ''}</span>;
    },
  },
  {
    ellipsis: true,
    title: 'Device account',
    dataIndex: 'account_count',
    key: 'account_count',
    align: 'center',
    render: (currentData: number | null) => {
      return (
        <span>
          {currentData == null
            ? '0 device'
            : currentData + 'device' + (currentData >= 0 ? 's' : '')}
        </span>
      );
    },
  },
  {
    ellipsis: true,
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    align: 'center',
    render: (currentData: string | null) => {
      return (
        <span>
          {currentData === 'feedback' && <FeedbackType />}
          {currentData === 'sms' && <SmsType />}
          {currentData === 'device' && <DeviceType />}
        </span>
      );
    },
  },
  {
    ellipsis: true,
    title: 'Purchase Date',
    dataIndex: 'created_at',
    key: 'created_at',
    align: 'center',
    render: (currentData: Date) => {
      return <span>{dateFormatter(currentData)}</span>;
    },
  },
  {
    ellipsis: true,
    title: 'Amount',
    dataIndex: 'paid_amount',
    key: 'paid_amount',
    align: 'center',
    render: (currentData: number) => {
      return <span>{currencyFormatter(currentData)}</span>;
    },
  },
  {
    ellipsis: true,
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (currentData: number) => {
      return currentData === 0 ? (
        <button className="bg-[#6ab04c] border-none text-white px-2 py-0.5 rounded-sm text-[12px]">
          Paid
        </button>
      ) : (
        ''
      );
    },
  },
  {
    align: 'center',
    title: 'Actions',
    dataIndex: 'invoice',
    key: 'actions',
    // width: '15%',
    render: (currentData: string) => {
      const endPoint = currentData.split('invoice/')?.[1];

      return currentData ? (
        <button
          className="bg-[#fb9a00] border-none text-white px-3 py-1 rounded-sm text-md md:text-md"
          onClick={() => handleDownloadPDF(endPoint)}
        >
          Download Invoice
        </button>
      ) : (
        ''
      );
    },
  },
];

const licenseManageColumns = [
  {
    ellipsis: true,
    title: '#',
    dataIndex: 'id',
    key: 'id',
    width: '5%',
  },
  {
    ellipsis: true,
    title: 'Device name',
    dataIndex: 'name',
    key: 'device_name',
    sorter: (a, b) => a.name - b.name,
  },
  {
    ellipsis: true,
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    sorter: (a, b) => a.name - b.name,
  },
  {
    ellipsis: true,
    title: 'Branch Name',
    dataIndex: 'branch',
    key: 'branch_name',
    sorter: (a, b) => a.branch - b.branch,
  },
  {
    ellipsis: true,
    title: 'Last login',
    dataIndex: 'last_login',
    key: 'last_login',
    sorter: (a, b) => a.username - b.username,
  },

  {
    ellipsis: true,
    title: 'Status',
    dataIndex: ['status', 'is_offline_mode'],
    key: 'status',
    align: 'center',

    render: (_: null, data: any) => (
      <div className="bg-[#bbb]  text-white inline-block p-1 text-xs rounded-sm">
        <span>
          {data.status + ', Offline mode: ' + (data.mode ? ' on' : ' off')}
        </span>
        {/* <span>{'Offline mode:' }</span>
        <span>{data.mode ? ' on' : ' off'}</span> */}
      </div>
    ),
  },
  {
    ellipsis: true,
    title: 'Connection',
    dataIndex: 'any_problem',
    key: 'connection',
    align: 'center',
    width: '10%',

    render: (text: string) => (
      <span
        className={`p-1.5 rounded-full ${
          text ? 'bg-green-600' : 'bg-gray-400'
        }  inline-block`}
      ></span>
    ),
  },
  {
    align: 'center',
    title: 'Actions',
    key: 'actions',
    width: '6%',
    render: () => (
      <div className="bg-[#8dcadf] inline-block p-2 rounded-sm">
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="logout"
          width="1.3em"
          height="1.3em"
          fill="white"
          aria-hidden="true"
        >
          <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"></path>
        </svg>
      </div>
    ),
  },
];

export { licenseManageColumns, paymentHistoryColumns };
