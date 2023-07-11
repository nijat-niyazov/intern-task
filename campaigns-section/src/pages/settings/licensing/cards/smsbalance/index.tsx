import { Card, Input } from 'antd';
import { memo, useState } from 'react';
import { IconOfPayPal, IconOfWarning } from '~/assets/icons';
import Button from '../../components/button';
import CardHeader from '../../components/cardHeader';

const SmsBalance = ({ data: balance }: { data: any }) => {
  // const onChange = (value: number) => console.log('changed', value);
  const [value, setValue] = useState(10);

  const onChange = (e: any) => {
    if (e !== '') {
      setValue(e.target.value);
    }
  };

  return (
    <div>
      <Card className="px-4 py-2">
        <CardHeader
          title="SMS balance:"
          openModalType="sms"
          icon={<IconOfWarning />}
          dynamicValue={`$${balance}`}
        />

        <div className="grid my-5 gap-1">
          <div className="flex justify-between items-start font-light flex-wrap">
            <span className="text-[14px]">Add Balance</span>
            <Input
              placeholder="Enter amount (USD)"
              min={10}
              type="number"
              value={value}
              onChange={onChange}
              style={{ borderRadius: 0, width: '50%' }}
            />
          </div>
        </div>

        {/* <CardFooter buttons={['']} icon={<IconOfPayPal />} /> */}

        <div className="flex gap-2 justify-end">
          <IconOfPayPal />
          <Button disabled={value < 10} label="Purchase" type="primary" />
        </div>
      </Card>
    </div>
  );
};

export default memo(SmsBalance);
