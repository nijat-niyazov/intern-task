import { Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleShowModal } from '~/redux/licenseModalSlice';
import { updateAlert } from '../../../api';
import Button from '../../button';

const AlertContent = ({ data }: { data: any }) => {
  const [form] = useForm();
  const values = Form.useWatch([], form);

  const [formData, setFormData] = useState(data);

  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    form.resetFields();
    console.log('Form values:', values);
    dispatch(handleShowModal(false));
    const res = await updateAlert(values);
    setFormData(res[0]);
  };

  console.log(formData);

  return (
    <Form
      initialValues={data}
      form={form}
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item className="px-7" name="sms_alert" label="SMS balance alerts">
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
          <Button label="Cancel" type="default" />
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
  );
};

export default AlertContent;
