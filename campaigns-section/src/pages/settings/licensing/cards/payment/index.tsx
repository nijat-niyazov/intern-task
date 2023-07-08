import { Card, Table } from 'antd';
import Column from 'antd/es/table/Column';
import useSWR from 'swr';
import { fetchData } from '../../api';
import { paymentHistoryEndpoint } from '../../api/endpoints';
import { CardHeader } from '../../components/card';
import { paymentHistoryColumns } from '../../constants/constants';
import { DataType } from '../../interfaces/interfaces';

const Payment = () => {
  const { data } = useSWR<DataType[]>(paymentHistoryEndpoint, fetchData);

  return (
    <div className="md:col-span-3">
      <Card className="px-4 h-full">
        <CardHeader title="Payment history" border={false} />

        {data && (
          <Table scroll={{ x: 500 }} size="small" dataSource={data}>
            {paymentHistoryColumns.map(column => (
              <Column {...column} />
            ))}
          </Table>
        )}
      </Card>
    </div>
  );
};

export default Payment;

{
  /* <Column
              title="#"
              dataIndex="id"
              render={(ids, wholeData, i) => {
                return <span> {i + 1}</span>;
              }}
            />
            <Column
              title="Extended"
              dataIndex="extended"
              width={'8%'}
              render={(currentData, wholeData, i) => {
                return <span> {currentData == null ? '0 month' : ''}</span>;
              }}
            />
            <Column
              title="Device account"
              align="center"
              dataIndex="account_count"
              render={(currentData, wholeData, i) => {
                return (
                  <span>
                    {currentData == null
                      ? '0 device'
                      : currentData + 'device' + (currentData >= 0 ? 's' : '')}
                  </span>
                );
              }}
            />

            <Column
              title="Type"
              align="center"
              dataIndex="type"
              render={(currentData, wholeData, i) => {
                // console.log(currentData);

                return (
                  <span>
                    {currentData === 'feedback' && <FeedbackType />}
                    {currentData === 'sms' && <SmsType />}
                    {currentData === 'device' && <DeviceType />}
                  </span>
                );
              }}
            />
            <Column
              title="Purchase Date"
              align="center"
              dataIndex="created_at"
              render={(currentData, wholeData, i) => {
                // console.log(currentData);

                return <span>{dateFormatter(currentData)}</span>;
              }}
            />
            <Column
              title="Amount"
              align="center"
              dataIndex="paid_amount"
              render={(currentData, wholeData, i) => {
                // console.log(currentData);

                return <span>{currencyFormatter(currentData)}</span>;
              }}
            />
            <Column
              title="Status"
              dataIndex="status"
              align="center"
              render={(currentData, wholeData, i) => {
                // console.log(currentData);

                return currentData === 0 ? (
                  <button className="bg-[#6ab04c] border-none text-white px-2 py-0.5 rounded-sm text-[12px]">
                    Paid
                  </button>
                ) : (
                  ''
                );
              }}
            />
            <Column
              title="Actions"
              dataIndex="invoice"
              align="center"
              render={(currentData, wholeData, i) => {
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
              }}
            /> */
}
