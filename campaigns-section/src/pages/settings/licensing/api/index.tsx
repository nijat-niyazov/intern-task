import axios from 'axios';
import { dateFormatter } from '../utils';
import {
  alertsEndPoint,
  downloadInvoiceEndpoint,
  uploadPhotoEndpoint,
} from './endpoints';

export const userToken =
  'a4e98b9bfe5249fff6d00bd618b30fdd2d6d386dcee43c7abf9db088eda520de';
// export const userToken =
//   '575074ab26c424a556804b93fc6e90c6abfee6835df55bc77d75125609d492d2';
const apiUrl = 'https://apinew.testqmeter.net/api/v1/';

export const testUrl = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Token ${userToken}`,
  },
});

export const fetchFilteredData = async (cacheKey: string) => {
  console.log(cacheKey);
  
  try {
    const res = await testUrl.get(cacheKey);
    if (res.status !== 200) throw new Error('went wrong');

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
export const fetchData = async (cacheKey: string) => {
  try {
    const res = await testUrl.get(cacheKey);
    if (res.status !== 200) throw new Error('went wrong');

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateAlert = async (values: {
  sms_alert: string | number;
  feedback_alert: string | number;
}) => {
  try {
    const res =await testUrl.post(alertsEndPoint, values);
    return res.data
  } catch (err) {
    console.log(err);
  }
};

export const uploadImage = async (formData: any) => {
  try {
    const res = await testUrl.patch(uploadPhotoEndpoint, formData);

    return res.data;
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

export const handleDownloadPDF = async (endPoint: string) => {
  try {
    const response = await testUrl.get(downloadInvoiceEndpoint + endPoint, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const url = response.data.file;

    const link = document.createElement('a');
    link.href = url;

    link.setAttribute(
      'download',
      'Device History for ' + dateFormatter(new Date())
    );

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  } catch (error) {
    console.error('Failed to download PDF:', error);
  }
};

export const createOrder = async()=>[
  
]
