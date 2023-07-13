import axios from 'axios';
import { dateFormatter } from '~/pages/settings/licensing/utils';
import {
  alertsEndPoint,
  downloadInvoiceEndpoint,
  uploadPhotoEndpoint,
} from './endpoints';

export const userToken =
  'a4e98b9bfe5249fff6d00bd618b30fdd2d6d386dcee43c7abf9db088eda520de';

const apiUrl = 'https://apinew.testqmeter.net/api/v1/';

export const testUrl = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Token ${userToken}`,
  },
});

export const fetchData = async (cacheKey: string) => {
  try {
    const res = await testUrl.get(cacheKey);
    if (res.status !== 200) throw new Error('went wrong');

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchFilteredData = async (
  cacheKey: [string, { username?: string; name?: string; ids?: string[] }]
  // ! first element is string which is (endpoint), others are params with their types
) => {
  if (cacheKey && cacheKey.length === 2) {
    const endpoint = cacheKey[0];
    const queriesObj = cacheKey[1];

    // ? This code is written to check how pdf is downloaded by response url

    // * 1. Firstly we create empty params object whichs key is string and accept any value

    const params: { [key: string]: any } = {};

    // * 2. We loop through each key in queriesObj

    for (const key in queriesObj) {
      const value = queriesObj?.[key as keyof typeof queriesObj];

      // * 2. We are checking if queriesObj has value with that [key]

      if (queriesObj.hasOwnProperty(key) && value && value?.length !== 0) {
        // * 3. Then checking if queriesObj hasProp with particular key and this key has to have value
        params[key] = value;
      }
    }

    // ! Don't DO THIS ❌
    // const params = {
    //   username,
    //   name,
    //   ids,
    // };

    // !username && delete params.username;
    // !name && delete params.name;
    // !ids && delete params.ids;

    try {
      const res = await testUrl.get(endpoint, {
        params,

        paramsSerializer: {
          indexes: null,
          // * this is used for handling array queries
          // ? f.g userId=[1,2,3] it will be converted into userId=1&userId=2&userId3
        },
      });

      if (res.status !== 200) throw new Error('Something went wrong');

      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
};

export const updateAlert = async (values: {
  sms_alert: string | number;
  feedback_alert: string | number;
}) => {
  try {
    const res = await testUrl.post(alertsEndPoint, values);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// * This is how pdf is downloaded by response url
export const uploadImage = async (formData: any) => {
  try {
    const res = await testUrl.patch(uploadPhotoEndpoint, formData);

    return res.data;
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

// * This is how pdf is downloaded by response url
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
