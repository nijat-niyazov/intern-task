import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { fetchData } from '~/api/license';
import { periodLicense } from '~/api/license/endpoints';
import { selectedValue } from '~/redux/stepsSlice';

const Extende3 = () => {
  const selectedMonth = useSelector(selectedValue);

  const { data } = useSWR(
    selectedMonth ? periodLicense + selectedMonth : null,
    fetchData
  );
  if (data) {
    console.log(data);
  }

  return <h1 className="font-bold text-lg text-[#65676b]">Last Step Of 2</h1>;
};

export default Extende3;
