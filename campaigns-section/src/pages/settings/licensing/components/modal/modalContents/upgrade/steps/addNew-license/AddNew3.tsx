import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { fetchData } from '~/api/license';
import { deviceLicense } from '~/api/license/endpoints';
import { value } from '~/redux/stepsSlice';

const AddNew3 = () => {
  const licenseValue = useSelector(value);

  const { data } = useSWR(
    licenseValue ? deviceLicense + licenseValue : null,
    fetchData
  );

  if (data) {
    console.log(data);
  }

  return (
    <div className="m-auto flex flex-col gap-y-10 items-center">
      <h1 className="font-bold text-xl">Last detaiil of 1st one</h1>
    </div>
  );
};

export default AddNew3;
