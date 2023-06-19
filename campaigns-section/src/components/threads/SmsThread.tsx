import { Button, Card, Form, Input, Select, SelectProps, theme } from 'antd';
import React from 'react';

const handleChange = (values: string[]) => {
  console.log(`selected ${values}`);
};

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const SmsThread: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onPush = (values: any) => {
    values.push()
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Card
        style={{
          background: colorBgContainer,
          width: '100%',
        }}
        className=" p-4 rounded-lg"
      >
        <Form
          // initialValues={{ remember: true }}
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <div className="grid grid-cols-2 gap-x-2 flex-1">
            
            <Form.Item name="input" label="Thread Name" required>
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item name="feedback" label="Feedback Templates">
              <Select placeholder="Select Template">
                <Select.Option value="feedback">FeedBack </Select.Option>
                <Select.Option value="templates">Templates</Select.Option>
                <Select.Option value="static">Static</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="From" required>
              <Input disabled placeholder="Qmeter or 2534" />
            </Form.Item>

            <Form.Item
              name="receivers"
              label="To"
              rules={[
                {
                  required: true,
                  message: 'Please select your favourite colors!',
                  type: 'array',
                },
              ]}
            >
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Please select"
                onChange={handleChange}
                options={options}
              />
            </Form.Item>
          </div>

          <Button className="ml-auto mr-10" type="default">
            Cancel
          </Button>
          <Button
            className="ml-auto bg-blue-500"
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form>
      </Card>

      <Card
        style={{
          background: colorBgContainer,
          width: '50%',
        }}
        className=" p-4 rounded-lg"
      >
        <p>okay</p>
        <p>okay</p>
        <p>okay</p>
        <p>okay</p>
      </Card>
    </>
  );
};

export default SmsThread;
