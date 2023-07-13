import { Toaster } from 'react-hot-toast';
import useSWR from 'swr';
import { fetchData } from '~/api/license';
import { balanceEndpoint } from '../../../api/license/endpoints';
import {
  About,
  DeviceLicense,
  Payment,
  SmsBalance,
  WebFeedBack,
} from './cards';
import { ModalTypes } from './components';
import './style.css';

const Licensing = () => {
  const { data: balanceData, isLoading: balanceIsLoading } = useSWR(
    balanceEndpoint,
    fetchData
  );

  const company = balanceData?.company;
  const sms = balanceData?.sms_balance;
  const feedback = balanceData?.feedback;
  const device = balanceData?.device_licence;

  return (
    !balanceIsLoading && (
      <div className="flex flex-col md:grid gap-2 w-full">
        <About data={company} />
        <SmsBalance data={sms} />
        <DeviceLicense data={device} />
        <WebFeedBack data={feedback} />
        <Payment />
        <ModalTypes />
        <Toaster position="top-center" />
      </div>
    )
  );
};

export default Licensing;
