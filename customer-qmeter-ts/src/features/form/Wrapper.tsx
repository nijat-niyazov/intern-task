import { ReactNode } from 'react';
import { FirstSection } from '../../components/form/sections';

type WrapperProps = {
  children?: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="bg-[#f4f5f7] flex overflow-x-hidden flex-col lg:flex-row lg:items-start items-center py-6 px-4 gap-10 font-sans lg:px-40">
      <FirstSection />
      {children}
    </div>
  );
};

export default Wrapper;
