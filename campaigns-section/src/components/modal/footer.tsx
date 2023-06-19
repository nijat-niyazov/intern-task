import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { handleModal } from '~/redux/modalSlice';

const Footer = () => {
  const dispatch = useDispatch();

  const handleClose = () => dispatch(handleModal(false));

  return (
    <div className="inline-block items-start p-2  gap-10 ">
      <Button onClick={handleClose} type="default">
        Cancel
      </Button>
      <Button className="bg-blue-600" type="primary" htmlType="submit">
        Submit
      </Button>
    </div>
  );
};

export default Footer;
