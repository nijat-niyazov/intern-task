import { Toaster } from 'react-hot-toast';
import useSWR from 'swr';
import { fetchData } from './api';
import { balanceEndpoint } from './api/endpoints';
import About from './cards/about';
import DeviceLicense from './cards/device';
import WebFeedBack from './cards/feedback';
import Payment from './cards/payment';
import SmsBalance from './cards/smsbalance';
import Modals from './components/modal/modalTypes';

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

  // const typeOfModal = useSelector(modalType);
  // const isModalOpen = useSelector(isModalOpened);

  // const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // const [isLoading, setIsloading] = useState<boolean>(false);

  // // const handleFileChange = async (
  // //   event: React.ChangeEvent<HTMLInputElement>
  // // ) => {
  // //   const file = event.target.files?.[0];

  // //   if (file) {
  // //     setSelectedFile(file);

  // //     const formData = new FormData();
  // //     formData.append('logo', file);

  // //     try {
  // //       setIsloading(true);
  // //       const data = await uploadImage(formData);
  // //       if (data) setSelectedFile(data);
  // //     } catch (error) {
  // //       setIsloading(false);
  // //       console.error('Error uploading image:', error);
  // //     }
  // //   }
  // // };

  // const props: UploadProps = {
  //   name: 'file',
  //   action: 'https://apinew.testqmeter.net/api/v1/auth/company-edit/',
  //   headers: {
  //     authorization: `Token ${userToken}`,
  //   },
  //   method: 'PATCH',
  //   onChange(info) {
  //     console.log(info);
  //     setSelectedFile(info.file.originFileObj);
  //     // const fetch = async()
  //   },
  // };

  return (
    !balanceIsLoading && (
      <div className="flex flex-col md:grid gap-2 w-full">
        <About data={company} />
        <SmsBalance data={sms} />
        <DeviceLicense data={device} />
        <WebFeedBack data={feedback} />
        <Payment />
        <Toaster position="top-center" />

        <Modals />
      </div>
    )
  );
};

export default Licensing;

{
  /* About ✅  */
}
{
  /* <div className="md:row-span-2 ">
            <Card className="px-4 h-full pb-2">
              <CardHeader
                title="About company"
                icon={<IconOfAbout />}
                openModalType="alert"
              />

              <CardBody>
                <div className="w-1/3 m-auto">
                  <img
                    className={`w-full object-contain h-full ${
                      isLoading
                        ? 'transition-opacity opacity-20'
                        : 'opacity-100'
                    } duration-200 h-40`}
                    src={selectedFile?.logo ?? company?.logo}
                    onLoad={() => setIsloading(false)}
                  />
                </div>
                <input
                  disabled={isLoading}
                  type="file"
                  onChange={handleFileChange}
                />


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
          </div> */
}
{
  /* About ✅  */
}

{
  /* Sms */
}
{
  /* <div>
            <Card className="px-4 h-full pb-2">
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
          </div> */
}
{
  /* Sms */
}

{
  /* Device  ✅  */
}
{
  /* <div className="md:row-span-2 ">
            <Card className="px-4 h-full pb-2">
              <CardHeader title="Device Licence information" />

              <CardBody>
                <List data={device} />
              </CardBody>
              <CardFooter
                buttons={['License in use', '⬆ Upgrade License']}
                openModalType={'manage'}
              />
            </Card>

            {typeOfModal &&
              (typeOfModal === 'manage') | (typeOfModal === 'upgrade') && (
                <ModalComponent
                  title={
                    typeOfModal === 'manage'
                      ? 'Manage your online devices'
                      : 'Upgrade your license'
                  }
                  width={'80%'}
                  searchable
                  hasFooter={false}
                  cacheKey={licenceInUseEndpoint}
                  isModalOpen={isModalOpen}
                />
              )}
          </div> */
}
{
  /* Device  ✅  */
}

{
  /* web feedback */
}
{
  /* <div>
            <Card className="px-4 h-full pb-2">
              <CardHeader
                title="Web feedback balance:"
                balance={feedback?.balance}
              />

              <CardBody>
                <div className="grid gap-1">
                  <div className="flex justify-between items-start font-light">
                    <span className=" text-[14px]">Last Payment</span>
                    <span>2021-01-01</span>
                  </div>

                  <div className="flex justify-between items-start font-light">
                    <span className="text-[14px]">Add Balance</span>
                    <Select
                      defaultValue="1000"
                      style={{ width: 240 }}
                      onChange={handleSelect}
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
          </div> */
}
{
  /* web feedback */
}

{
  /* Table */
}
{
  /* <div className="md:col-span-3">
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
        )} */
}
