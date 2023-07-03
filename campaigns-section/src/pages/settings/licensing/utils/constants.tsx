const paymentHistoryColumns = [
  {
    ellipsis: true,
    title: '#',
    dataIndex: 'id',
    key: 'id',
    width: '5%',
  },
  {
    ellipsis: true,
    title: 'extended',
    dataIndex: 'extended',
    key: 'extended',
  },
  {
    ellipsis: true,
    title: 'Device account',
    dataIndex: 'device_account',
    key: 'device_account',
    align: 'center',
  },
  {
    ellipsis: true,
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    ellipsis: true,
    title: 'Purchase Date',
    dataIndex: 'purchase_date',
    key: 'purchase_date',
    align: 'center',
  },
  {
    ellipsis: true,
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    align: 'center',
  },
  {
    ellipsis: true,
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (statuses: string[], i: number) => (
      <div className="flex gap-2 justify-center" key={i}>
        {statuses.map(action => (
          <button
            className="bg-[#6ab04c] border-none text-white px-2 py-1 rounded-sm text-[12px]"
            key={action}
          >
            {action}
          </button>
        ))}
      </div>
    ),
  },
  {
    align: 'center',
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    width: '15%',
    render: (actions: string[], i: number) => (
      <div className="flex gap-2 justify-center" key={i}>
        {actions.map(action => (
          <button
            className="bg-[#fb9a00] border-none text-white px-3 py-1 rounded-sm text-xs md:text-md "
            key={action}
          >
            {action}
          </button>
        ))}
      </div>
    ),
  },
];
export { paymentHistoryColumns };
