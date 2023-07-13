import { Card, Table } from 'antd';
import Column from 'antd/es/table/Column';
import { memo } from 'react';
import useSWR from 'swr';
import { fetchData } from '~/api/license';
import { paymentHistoryEndpoint } from '~/api/license/endpoints';
import { paymentHistoryColumns } from '../../../../../constants/license/constants';
import CardHeader from '../../components/cardHeader';
import { PaymentDataType } from '../../../../../interfaces/license/interfaces';

const Payment = () => {
  const { data } = useSWR<PaymentDataType[]>(paymentHistoryEndpoint, fetchData);

  return (
    <div className="md:col-span-3">
      <Card className="px-4 h-full">
        <CardHeader title="Payment history" border={false} />

        {data && (
          <Table scroll={{ x: 500 }} size="small" dataSource={data}>
            {paymentHistoryColumns.map((column: any, i: number) => (
              <Column key={i} {...column} />
            ))}
          </Table>
        )}
      </Card>
    </div>
  );
};

export default memo(Payment);
