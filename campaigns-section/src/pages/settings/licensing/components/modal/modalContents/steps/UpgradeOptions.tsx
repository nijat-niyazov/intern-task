import { Radio, RadioChangeEvent, Space } from 'antd';

const UpgradeOptions = ({
  onChange,
  selected,
}: {
  onChange: (e: RadioChangeEvent) => void;
  selected: number;
}) => {
  return (
    <div>
      <h1 className="font-bold mb-5 text-lg text-[#65676b]">
        What do you want to do?
      </h1>

      <Radio.Group onChange={onChange} value={selected}>
        <Space direction="vertical">
          <Radio value={0}>Add New Device License</Radio>
          <Radio value={1}>Extend Current License</Radio>
          <Radio value={2}>Add & Extend License</Radio>
          <Radio value={3}>Web Balance</Radio>
        </Space>
      </Radio.Group>
    </div>
  );
};

export default UpgradeOptions;
