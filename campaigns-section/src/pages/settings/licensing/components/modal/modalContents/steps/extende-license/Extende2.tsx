import { Radio, RadioChangeEvent, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { handleSelected, selectedValue } from '~/redux/stepsSlice';

const Extende2 = () => {
  const dispatch = useDispatch();
  const selectedMonth = useSelector(selectedValue);

  const onChange = (e: RadioChangeEvent) => {
    // setSelected(e.target.value);
    dispatch(handleSelected(e.target.value));
  };

  return (
    <div>
      <Radio.Group onChange={onChange} value={selectedValue}>
        <Space direction="vertical">
          <Radio value={0}>1 months</Radio>
          <Radio value={4}>4 months</Radio>
          <Radio value={6}>6 months</Radio>
          <Radio value={12}>12 months</Radio>
        </Space>
      </Radio.Group>
    </div>
  );
};

export default Extende2;
