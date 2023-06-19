import axios from 'axios';

const EndPoints = {
  sms: 'sms/',
  emailEndPoint: 'email/',
};

const mainUrl = axios.create({
  baseURL: 'http://localhost:3500/',
});

export const smsTemplates = async (template: any) => {
  try {
    const res = await mainUrl.get(EndPoints.sms, template);
    if (res.status !== 200) throw new Error('Something went wrong');

    return res.data;
  } catch (err: any) {
    return err.message;
  }
};

export const sendSmsTemplate = async (template: any) => {
  try {
    const res = await mainUrl.post(EndPoints.sms, template);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
