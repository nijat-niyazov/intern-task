import { Card } from 'antd';
import { useSelector } from 'react-redux';
import { getSmsInfo } from '~/redux/smsInfoSlice';

const Info = () => {
  const smsInfo = useSelector(getSmsInfo);

  return (
    <Card className="w-full md:w-1/3 ">
      <div className="grid gap-2 mb-5">
        <div className="grid gap-2">
          <h2>Sending Info</h2>
          <hr />
        </div>
      </div>

      <div className="grid gap-2 text-gray-500">
        <div className="pb-10 flex flex-col justify-center items-center text-black">
          <img
            src="https://appnew.testqmeter.net/static/media/sms_icon.42d2e80a.svg"
            className="w-10 h-10"
          />
          <p className="text-4xl">{smsInfo.totalSmsCount}</p>
          <p className="text-md">Total sms count</p>
        </div>

        <div className="flex items-center justify-between p-2">
          <h2>Customer count</h2>
          <span>{smsInfo.customerCount}</span>
        </div>
        <hr />
        <div className="flex items-center justify-between p-2">
          <h2>SMS balance </h2>
          <span>2</span>
        </div>
        <hr />
        <div className="flex items-center justify-between p-2">
          <h2>Feedback balance </h2>
          <span>2</span>
        </div>
        <hr />
        <div className="flex items-center justify-between p-2">
          <h2>Total price</h2>
          <span>{smsInfo.totalPrice}</span>
        </div>
        <hr />
      </div>
    </Card>
  );
};

export default Info;
