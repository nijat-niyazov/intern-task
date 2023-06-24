import { InputNumber } from 'antd';
import { FC } from 'react';
import { licenseData } from '~/utils/license';

interface BodyDataProps {
  listDataOf?: string;
  balance?: boolean;
}

const onChange = (value: number) => {
  console.log('changed', value);
};

const CardBody: FC<BodyDataProps> = ({ listDataOf, balance }) => {
  return (
    <>
      {balance ? (
        <div className="grid my-5 gap-1">
          <div className="flex justify-between items-start font-light">
            <span className=" text-[14px]">Last Payment</span>
            <span>2021-01-01</span>
          </div>
          <div className="flex justify-between items-start font-light">
            <span className="text-[14px]">Add Balance</span>
            <InputNumber
              placeholder="Enter amount (USD)"
              min={1}
              max={10}
              defaultValue={3}
              onChange={onChange}
              style={{ width: '60%', borderRadius: 0 }}
            />
          </div>
        </div>
      ) : null}

      {listDataOf && (
        <ul className="my-6 grid gap-2">
          {licenseData[listDataOf].map(item =>
            Object.entries(item).map(([key, value], index) => (
              <li
                key={index}
                style={{
                  borderBottomWidth:
                    index === Object.entries(item).length - 1 ? '0px' : '1px',
                }}
                className="flex px-2 items-center justify-between  border-gray-200 pb-2 text-[#65676b] font-extralight"
              >
                <span> {key.split('_').join(' ')}</span>
                <span> {value}</span>
              </li>
            ))
          )}
        </ul>
      )}
    </>
  );
};

export default CardBody;
