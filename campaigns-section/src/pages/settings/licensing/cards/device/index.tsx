import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import { handleModalType, handleShowModal } from '~/redux/licenseModalSlice';
import Button from '../../components/button';
import CardHeader  from '../../components/cardHeader';
import List from '../../components/list/List';

const DeviceLicense = ({ data }: { data: any }) => {
  const dispatch = useDispatch();

  const handleClick = (openModalType: string) => () => {
    dispatch(handleShowModal(true));
    dispatch(handleModalType(openModalType));
  };

  return (
    <div className="md:row-span-2 ">
      <Card className="px-4 py-2 h-full">
        <CardHeader
          title="Device Licence information"
          openModalType="license"
        />

        <div className="mt-5">
          <List data={data} />
        </div>

        <div className="flex gap-2 justify-end flex-wrap">
          <Button
            onClick={handleClick('manage')}
            label="License in use"
            type="default"
          />
          <Button
            onClick={handleClick('update')}
            label="Upgrade License"
            type="primary"
          />
        </div>
      </Card>
    </div>
  );
};

export default DeviceLicense;
