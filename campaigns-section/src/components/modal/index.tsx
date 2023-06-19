import { Form, Input, Modal as ModalContainer } from 'antd';
import { ChangeEvent, FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendSmsTemplate } from '~/api/sms';
import { handleModal, isModalOpened, modalOf } from '~/redux/modalSlice';
import Footer from './footer';
import TextField from './sms';
import Title from './title';

const Modal: FC = () => {
  const [name, setName] = useState<string>('');
  const [text, setText] = useState<string>('');

  const modalIsOpened = useSelector(isModalOpened);
  const typeOfModal = useSelector<string>(modalOf);

  const dispatch = useDispatch();

  const handleChange =
    (setState: ChangeEvent<HTMLInputElement>) => (e: Event) => {
      setState(e.target.value);
    };

  const onSubmit = (e: any) => {
    const formData = { name, text, id: new Date().getTime() };
    sendSmsTemplate(formData);
    dispatch(handleModal(false));
    setName('');
    setText('');
  };

  return (
    <ModalContainer
      closable={false}
      bodyStyle={{
        padding: '20px',
        position: 'relative',
      }}
      title={<Title typeOfModal={typeOfModal} />}
      open={modalIsOpened}
      onCancel={() => dispatch(handleModal(false))}
      footer={null}
    >
      <Form layout="vertical" onFinish={onSubmit}>
        <Form.Item label="Template Name" required>
          <Input
            value={name}
            onChange={handleChange(setName)}
            placeholder="Enter a name"
          />
        </Form.Item>

        <Form.Item label={typeOfModal + ' Text'} required>
          {typeOfModal === 'sms' && (
            <TextField
              value={text}
              onChange={handleChange(setText)}
              typeOfModal={typeOfModal}
            />
          )}
          {typeOfModal === 'email' && null}
        </Form.Item>

        <Footer />
      </Form>
    </ModalContainer>
  );
};

export default Modal;

{
  /* <div className="absolute right-5   top-[28%] z-10">
          <Button
            style={{
              borderRadius: 0,
            }}
            type="default"
            htmlType="button"
          >
            Insert Name
          </Button>
          <Button
            style={{
              borderRadius: 0,
            }}
            type="default"
            htmlType="button"
          >
            Insert Link
          </Button>
        </div> */
}
