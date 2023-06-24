import { CaretDownOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  DatePicker,
  Dropdown,
  Form,
  FormInstance,
  Input,
  MenuProps,
  Select,
} from 'antd';
import { FC, KeyboardEvent, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleSmsInfo } from '~/redux/smsInfoSlice';
import Info from '../info';

const options = [
  {
    label: 'Customers',
    options: [
      { label: 'Jack', value: 'jack' },
      { label: 'Lucy', value: 'lucy' },
      { label: 'John', value: 'Shelby' },
      { label: 'Nijat', value: 'Niyazov' },
    ],
  },
];

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const SmsThread: FC = () => {
  const [nonCustomers, setNonCustomers] = useState<
    { label: string; value: string }[]
  >([]);
  const dispatch = useDispatch();

  const formRef = useRef<FormInstance<any>>(null);

  const addNonCustomer = (e: KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    const newCustomer = {
      label: value,
      value,
    };

    if (e.key === 'Enter') {
      setNonCustomers(p => [...p, newCustomer]);

      return nonCustomers.length === 0
        ? options.push({ label: 'Receivers', options: [newCustomer] })
        : options[1].options.push(newCustomer);
    }
  };

  const onValuesChange = () => {
    dispatch(handleSmsInfo(formRef?.current?.getFieldsValue()));
  };

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  function addValueToTextArea(type: string) {
    if (textareaRef.current) {
      const selectionStart = textareaRef.current.selectionStart;
      const selectionEnd = textareaRef.current.selectionEnd;

      const updatedValue =
        textareaRef.current.value.substring(0, selectionStart) +
        `{${type}}` +
        textareaRef.current.value.substring(selectionEnd);

      textareaRef.current.value = updatedValue;
    }
  }

  const items: MenuProps['items'] = useMemo(
    () => [
      {
        label: (
          <button onClick={() => addValueToTextArea('1st menu item')}>
            1st menu item
          </button>
        ),
        key: '0',
      },
      {
        label: (
          <button onClick={() => addValueToTextArea('2st menu item')}>
            2nd menu item
          </button>
        ),
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: '3rd menu item',
        key: '3',
      },
    ],
    []
  );

  return (
    <>
      <Card className="w-full">
        <div className="flex flex-col gap-2 mb-5">
          <h2>SMS Thread</h2>
          <hr />
        </div>
        <Form
          initialValues={{ remember: true }}
          ref={formRef}
          layout="vertical"
          onError={err => console.log(err)}
          onFinish={onFinish}
          onValuesChange={onValuesChange}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 flex-1">
            {/* name input */}
            <Form.Item
              className="font-bold"
              name="thread_name"
              label="Thread Name"
              rules={[
                {
                  required: true,
                  message: 'Invalid Input!',
                  type: 'string',
                },
              ]}
            >
              <Input
                placeholder="Thread name"
                className="rounded-none font-normal"
              />
            </Form.Item>

            {/* feedback select */}
            <Form.Item
              className="font-bold"
              name="feedback"
              label="Feedback Templates"
              rules={[
                {
                  required: true,
                  message: 'Select Template!',
                  type: 'string',
                },
              ]}
            >
              <Select placeholder="Select Template">
                <Select.Option value="feedback">FeedBack </Select.Option>
                <Select.Option value="templates">Templates</Select.Option>
                <Select.Option value="static">Static</Select.Option>
              </Select>
            </Form.Item>

            {/* disabled select */}
            <Form.Item label="From" required className="font-bold">
              <Input
                disabled
                placeholder="Qmeter or 2534"
                className="rounded-none font-normal"
              />
            </Form.Item>

            {/* receivers select */}
            <Form.Item
              className="font-bold"
              name="receivers"
              label="To"
              rules={[
                {
                  required: true,
                  message: 'Please select one or multiple customers!',
                  type: 'array',
                },
              ]}
            >
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                options={options}
                onInputKeyDown={addNonCustomer}
              />
            </Form.Item>

            {/* customer name input */}
            <Form.Item
              name="customer_name"
              label="If Customer name is empty"
              className="font-bold"
            >
              <Input
                placeholder="input placeholder"
                className="rounded-none font-normal"
                defaultValue="Customer"
              />
            </Form.Item>

            {/* Date Picker */}
            <Form.Item
              name="date"
              label="Select Start Date"
              className="font-bold"
            >
              <DatePicker showTime className="w-full" inputReadOnly />
            </Form.Item>

            <hr className="p-4 md:col-span-2" />

            <Form.Item
              name="content"
              label="Content"
              className="md:col-span-2 font-bold "
            >
              <div className="flex flex-col-reverse">
                <textarea
                  ref={textareaRef}
                  rows={6}
                  className="border-black border-[0.5px] w-full focus-within:outline-blue-400 px-2 transition all duration-300 font-normal py-1"
                />

                <div className="flex flex-col md:flex-row items-start gap-2 mb-3">
                  <Button
                    className="rounded-none border-[1px] border-black"
                    htmlType="button"
                    type="default"
                    onClick={() => addValueToTextArea('name')}
                  >
                    {'{Insert Name}'}
                  </Button>
                  <Button
                    className="rounded-none border-[1px] border-black"
                    htmlType="button"
                    type="default"
                    onClick={() => addValueToTextArea('link')}
                  >
                    {`{Insert Link}`}
                  </Button>

                  <Dropdown menu={{ items }} trigger={['click']}>
                    <Button
                      icon={<CaretDownOutlined />}
                      className="rounded-none border-[1px] border-black"
                      htmlType="button"
                      type="default"
                    >
                      Insert Template
                    </Button>
                  </Dropdown>
                </div>
              </div>
            </Form.Item>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            className="bg-green-600 rounded-none ml-auto flex"
          >
            Submit
          </Button>
        </Form>
      </Card>

      <Info />
    </>
  );
};

export default SmsThread;
