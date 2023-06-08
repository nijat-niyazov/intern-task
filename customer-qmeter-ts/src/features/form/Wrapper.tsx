import { FirstSection } from '../../components/form/form/sections';
import Form from './index';

const Wrapper = ({ children }: React.ReactNode) => {
  return (
    <div className="bg-[#f4f5f7] flex overflow-x-hidden flex-col lg:flex-row lg:items-start items-center py-6 px-4 gap-10 font-sans lg:px-40">
      <FirstSection />
      <Form />
    </div>
  );
};

export default Wrapper;
