import { useSelector } from 'react-redux';
import { modalType } from '~/redux/licenseModalSlice';
import Modal from '..';
import {
  alertsEndPoint,
  licenceInUseEndpoint,
  smsPriceEndpoint,
} from '../../../../../../api/license/endpoints';

const ModalTypes = () => {
  const typeOfModal = useSelector(modalType);

  if (typeOfModal) {
    switch (typeOfModal) {
      case 'alert':
        return (
          <Modal title="Manage alerts" hasFooter cacheKey={alertsEndPoint} />
        );
      case 'sms':
        return (
          <Modal title="Sms Price" cacheKey={smsPriceEndpoint} searchable />
        );
      case 'manage':
        return (
          <Modal
            title="Manage your online devices"
            cacheKey={licenceInUseEndpoint}
            searchable
            width="80%"
          />
        );

      case 'upgrade':
        return <Modal title="License Upgrade" cacheKey="upgrade" />;
      default:
        return null;
    }
  }
};

export default ModalTypes;
