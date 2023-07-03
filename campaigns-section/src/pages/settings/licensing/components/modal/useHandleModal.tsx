import { useDispatch } from 'react-redux';
import { handleModalType, handleShowModal } from '~/redux/licenseModalSlice';

const useHandleModal = (openModalType: string) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (openModalType) {
      dispatch(handleShowModal(true));
      dispatch(handleModalType(openModalType));
    }
  };

  return handleClick;
};

export default useHandleModal;
