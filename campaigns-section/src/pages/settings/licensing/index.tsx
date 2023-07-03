import { Card, InputNumber, Select, UploadProps, message } from 'antd';
import Table from 'antd/es/table';
import Column from 'antd/es/table/Column';
import Dragger from 'antd/es/upload/Dragger';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { IconOfAbout, IconOfPayPal, IconOfWarning } from '~/assets/icons';
import photoUpload from '~/assets/photo.png';
import { isModalOpened, modalType } from '~/redux/licenseModalSlice';
import {
  alertsEndPoint,
  balanceEndpoint,
  fetchData,
  licenceInUseEndpoint,
  smsPriceEndpoint,
} from './api';
import { CardBody, CardFooter, CardHeader } from './components/card';
import List from './components/list/List';
import ModalComponent from './components/modal';
import './style.css';
import { paymentHistoryColumns } from './utils/constants';
import { DataType } from './utils/interfaces';

const tableData: DataType[] = [
  {
    key: '1',
    id: 1,
    extended: '0 month',
    device_account: '0 device',
    type: 'icon',
    purchase_date: '14-Jun-2023',
    amount: 70,
    status: ['Paid'],
    actions: ['Download invoice'],
  },
];

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Licensing = () => {
  
  const { data: balanceData, isLoading: balanceIsLoading } = useSWR(
    balanceEndpoint,
    fetchData
  );

  const onChange = (value: number) => console.log('changed', value);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const company = balanceData?.company;
  const sms = balanceData?.sms_balance;
  const feedback = balanceData?.feedback;
  const device = balanceData?.device_licence;

  const typeOfModal = useSelector(modalType);
  const isModalOpen = useSelector(isModalOpened);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full p-4 gap-x-2 gap-y-2">
      {!balanceIsLoading && (
        <>
          {/* About ✅  */}
          <div className="md:row-span-2">
            <Card className="px-4 ">
              <CardHeader
                title="About company"
                icon={<IconOfAbout />}
                openModalType="alert"
              />

              <Dragger {...props}>
                <div className="grid gap-2 place-items-center py-10">
                  <img src={photoUpload} alt="upload_photo" width={30} />

                  <p className="ant-upload-hint px-4">
                    Try dropping file here, or click to select file to upload
                  </p>
                </div>
              </Dragger>

              <CardBody listDataOf="aboutData">
                <List data={company} />
              </CardBody>
            </Card>

            {typeOfModal && typeOfModal === 'alert' && (
              <ModalComponent
                title="Manage alerts"
                width={'40%'}
                hasFooter
                searchable={false}
                cacheKey={alertsEndPoint}
                isModalOpen={isModalOpen}
              />
            )}
          </div>
          {/* About ✅  */}

          {/* Sms */}
          <div>
            <Card className="px-4 h-full">
              <CardHeader
                title="SMS balance:"
                icon={<IconOfWarning />}
                balance={`$ ${sms}`}
                openModalType="sms"
              />
              <CardBody>
                <div className="grid my-5 gap-1">
                  <div className="flex justify-between items-start font-light">
                    <span className="text-[14px]">Add Balance</span>
                    <InputNumber
                      placeholder="Enter amount (USD)"
                      min={1}
                      max={10}
                      defaultValue={3}
                      onChange={onChange}
                      style={{ width: '60%', borderRadius: 0 }}
                    />
                  </div>
                </div>
              </CardBody>

              <CardFooter buttons={['Purchase']} icon={<IconOfPayPal />} />
            </Card>

            {typeOfModal && typeOfModal === 'sms' && (
              <ModalComponent
                title="Sms Price"
                width={'40%'}
                searchable
                hasFooter={false}
                cacheKey={smsPriceEndpoint}
                isModalOpen={isModalOpen}
              />
            )}
          </div>
          {/* Sms */}

          {/* Device  ✅  */}
          <div className="md:row-span-2 ">
            <Card className="px-4 h-full">
              <CardHeader title="Device Licence information" />

              <CardBody listDataOf="deviceData">
                <List data={device} />
              </CardBody>
              <CardFooter
                buttons={['License in use', '⬆ Upgrade License']}
                openModalType="manage"
              />
            </Card>

            {typeOfModal && typeOfModal === 'manage' && (
              <ModalComponent
                title="Manage your online devices"
                width={'80%'}
                searchable
                hasFooter={false}
                cacheKey={licenceInUseEndpoint}
                isModalOpen={isModalOpen}
              />
            )}
          </div>
          {/* Device  ✅  */}

          {/* web feedback */}
          <div>
            <Card className="px-4 h-full">
              <CardHeader
                title="Web feedback balance:"
                balance={feedback?.balance}
              />

              <CardBody>
                <div className="grid my-5 gap-1">
                  <div className="flex justify-between items-start font-light">
                    <span className=" text-[14px]">Last Payment</span>
                    <span>2021-01-01</span>
                  </div>

                  <div className="flex justify-between items-start font-light">
                    <span className="text-[14px]">Add Balance</span>
                    <Select
                      defaultValue="1000"
                      style={{ width: 240 }}
                      onChange={handleChange}
                      options={[
                        { value: '1000', label: '1,000 feedback - $100' },
                        { value: '5000', label: '5,000 feedback - $500' },
                        { value: '10000', label: '10,000 feedback - $900' },
                        { value: '50000', label: '50,000 feedback - $4000' },
                        { value: '100000', label: '100,000 feedback - $7000' },
                      ]}
                    />
                  </div>
                </div>
              </CardBody>

              <CardFooter buttons={['Purchase']} icon={<IconOfPayPal />} />
            </Card>
          </div>
          {/* web feedback */}

          {/* Table */}
          <div className="md:col-span-3">
            <Card className="px-4">
              <CardHeader title="Payment history" border={false} />

              <CardBody>
                <Table scroll={{ x: 500 }} size="small" dataSource={tableData}>
                  {paymentHistoryColumns.map(column => (
                    <Column {...column} />
                  ))}
                </Table>
              </CardBody>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default Licensing;
