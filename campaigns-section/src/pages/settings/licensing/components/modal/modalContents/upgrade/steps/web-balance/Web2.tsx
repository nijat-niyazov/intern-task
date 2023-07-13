import { Select } from 'antd';

const Web2 = () => {
  const handleSelect = (value: string) => console.log(`selected ${value}`);

  return (
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
  );
};

export default Web2;
