import { Card, Select } from 'antd';
import { IconOfPayPal } from '~/assets/icons';
import { CardFooter, CardHeader } from '../../components/card';

const WebFeedBack = ({ data }: { data: any }) => {
  const handleSelect = (value: string) => console.log(`selected ${value}`);

  console.log(data);

  return (
    <div>
      <Card className="px-4 py-2 h-full">
        <CardHeader title="Web feedback balance:" dynamicValue={data.balance} />

        <div className="grid mt-5 gap-1">
          <div className="flex justify-between items-start font-light">
            <span className=" text-[14px]">Last Payment</span>
            <span>{data.last_payment}</span>
          </div>

          <div className="flex justify-between items-start font-light flex-wrap">
            <span className="text-[14px]">Select Package</span>
            <Select
              defaultValue="1000"
              onChange={handleSelect}
              options={[
                { value: '1000', label: '1,000 feedback - $100' },
                { value: '5000', label: '5,000 feedback - $500' },
                { value: '10000', label: '10,000 feedback - $900' },
                { value: '50000', label: '50,000 feedback - $4000' },
                { value: '100000', label: '100,000 feedback - $7000' },
              ]}
            />
          </div>
        </div>

        <CardFooter buttons={['Purchase']} icon={<IconOfPayPal />} />
      </Card>
    </div>
  );
};

export default WebFeedBack;
