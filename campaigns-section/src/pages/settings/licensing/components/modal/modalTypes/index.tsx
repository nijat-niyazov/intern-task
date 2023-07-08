import { useSelector } from 'react-redux';
import { modalType } from '~/redux/licenseModalSlice';
import Modal from '..';
import {
  alertsEndPoint,
  licenceInUseEndpoint,
  smsPriceEndpoint,
} from '../../../api/endpoints';

const Modals = () => {
  const typeOfModal = useSelector(modalType);

  if (typeOfModal) {
    return (
      (typeOfModal === 'alert' && (
        <Modal
          title="Manage alerts"
          hasFooter
          cacheKey={alertsEndPoint}
          // children={<AlertContent />}
        />
      )) ||
      (typeOfModal === 'sms' && (
        <Modal
          title="Sms Price"
          cacheKey={smsPriceEndpoint}
          searchable
          // children={<SmsContent />}
        />
      )) ||
      (typeOfModal === 'manage' && (
        <Modal
          title="Manage your online devices"
          cacheKey={licenceInUseEndpoint}
          searchable
          // children={<LicenseManage />}
        />
      )) ||
      (typeOfModal === 'upgrade' && (
        <Modal title="Upgrade your license" cacheKey={'upgrade'} />
      ))
    );
  }
};

export default Modals;
