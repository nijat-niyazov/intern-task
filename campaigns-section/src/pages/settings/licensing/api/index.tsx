import axios from 'axios';

const userToken =
  '8adb994af13036ca54d51e777bcb25b53bb4827cfed87f544b5152b61c2e629d';
const apiUrl ='https://apinew.testqmeter.net/api/v1/'

export const smsPriceEndpoint = 'core/sms-price-list/';
export const balanceEndpoint = 'license/balance/';
export const licenceInUseEndpoint = 'license/license-in-use/';
export const paymentHistoryEndpoint = 'license/all-history/?page_size=10';

const testUrl = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Token ${userToken} `,
  },
});

export const fetchData = async (endPoint: string) => {
  try {
    const res = await testUrl.get(endPoint);
    if (res.status !== 200) throw new Error('went wrong');

    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

// export const fetchSmsBalance = async () => {
//   try {
//     const res = await testUrl.get(balanceEndpoint);
//     if (res.status !== 200) throw new Error('went wrong');

//     console.log(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// };
