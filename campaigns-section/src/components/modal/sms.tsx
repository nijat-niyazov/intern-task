import TextArea from 'antd/es/input/TextArea';

const TextField = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const length: number = value?.length;
  const messageCount = parseInt((length - 1) / 160);
  const remaining = (messageCount + 1) * 160 - length;

  return (
    <>
      <TextArea rows={4} value={value} onChange={onChange} />
      <span className="text-red-500">
        Length: {length} / Message count: {messageCount} / Remaining:
        {remaining}
      </span>
    </>
  );
};

export default TextField;
