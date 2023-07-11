import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { handleValue, value } from '~/redux/stepsSlice';

const AddNew2 = () => {
  // const [value, setValue] = useState(1);

  const licenseValue = useSelector(value);
  const dispatch = useDispatch();

  const changeValue = (e: any) => dispatch(handleValue(Number(e.target.value)));

  return (
    <Input
      type="number"
      className="w-1/2"
      value={licenseValue}
      onChange={changeValue}
    />
  );
};

export default AddNew2;
