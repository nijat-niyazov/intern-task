import { Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { handleShowModal } from '~/redux/licenseModalSlice';
import { updateAlert } from '../../../api';
import Button from '../../button';

const AlertContent = ({ data }: { data: any }) => {
  const [form] = useForm();
  const values = Form.useWatch([], form);

  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    console.log('Form values:', values);
    dispatch(handleShowModal(false));
    const res = await updateAlert(values);
    res
      ? toast.success('Alert is Updated.')
      : toast.error('Something Went Wrong :(');
  };

  const handleCloseModal = () => dispatch(handleShowModal(false));

  return (
    <div>
      {data && (
        <Form
          initialValues={data}
          form={form}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            className="px-7"
            name="sms_alert"
            label="SMS balance alerts"
          >
            <Input type="number" min={0} />
          </Form.Item>

          <Form.Item
            className="px-7"
            name="feedback_alert"
            label="Web feedback alert"
          >
            <Input type="number" min={0} />
          </Form.Item>

          <Form.Item>
            <div className="flex m-4 justify-end gap-2">
              <Button
                label="Cancel"
                type="default"
                onClick={handleCloseModal}
              />
              <Button
                label="Submit"
                type="primary"
                htmlType="submit"
                disabled={
                  values &&
                  Object.values(values).some(
                    value => value === undefined || value === '' || value == 0
                  )
                }
              />
            </div>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default AlertContent;
