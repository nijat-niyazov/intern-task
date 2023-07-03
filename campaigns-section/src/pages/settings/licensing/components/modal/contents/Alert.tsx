import { InputNumber } from 'antd';

const AlertContent = () => {
  return (
    <div className="grid gap-10 mx-7 py-4">
      <div>
        <span className="font-semibold">SMS Balance</span> <br />
        <InputNumber
          min={1}
          max={10}
          defaultValue={3}
          className="rounded-none w-full"
        />
      </div>

      <div className="w-full">
        <span className="font-semibold">Web Feedback Alert</span> <br />
        <InputNumber
          min={1}
          max={10}
          defaultValue={3}
          className="rounded-none w-full"
        />
      </div>
    </div>
  );
};

export default AlertContent;
