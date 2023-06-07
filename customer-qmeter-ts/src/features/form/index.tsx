import { BaseSyntheticEvent, useEffect, useState } from 'react';
import SubmitButton from '../../components/form/buttons/Submit';
// import Text from '../../components/form/fields/input/Input';
import Select from '../../components/form/fields/select/Select';
import FirstSection from '../../components/form/sections/FirstSection';
import { initialData } from '../../data/form/data';
import useFetchData from '../../hooks/useFetchData';
import { images } from '../../utils/images';
import Input from '../../components/form/fields/input/Input';

const Form = () => {
  const [formData, setFormdata] = useState(initialData);
  const [activeData, setActiveData] = useState(null);
  const { countries, cookie } = useFetchData();

  useEffect(() => {
    setActiveData(countries.find(c => c.country_name === cookie?.country_name));
  }, [cookie]);

  // ============== Handle Functions =============

  const handleChange = (e: BaseSyntheticEvent) => {
    setFormdata((p: any) => {
      const { name, value } = e.target;
      return { ...p, [name]: { ...p[name], value } };
    });
  };

  const handleSelectOption = (data: any) => {
    setActiveData(data);
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
  };

  const formBackgroundImage = {
    backgroundImage: `url(${
      images[(activeData || cookie)?.country_code?.toLowerCase()]
    })`,
  };

  const inputs = Object.keys(formData);

  return (
    <div className="bg-[#f4f5f7] flex overflow-x-hidden flex-col lg:flex-row lg:items-start items-center py-6 px-4 gap-10 font-sans lg:px-40">
      <FirstSection />

      <div className="rounded-lg lg:mx-10 text-[#354050] border-gray-300 border-[1px] m-auto">
        <form
          className="grid gap-4 px-6 py-14 text-sm bg-cover"
          onSubmit={handleSubmit}
          style={formBackgroundImage}
        >
          {/* ========== Inputs ========= */}

          {inputs.map((key: string, i: number) => {
            if (key === 'name' || key === 'email') {
              const field = formData[key];
              return (
                <Input
                  key={i}
                  name={key}
                  value={field?.value}
                  label={field?.label}
                  id={field?.label}
                  placeHolder={field?.placeHolder}
                  handleState={handleChange}
                />
              );
            }
          })}

          {/* ========== Selects ========= */}

          {/* <Select
            activeData={activeData || cookie}
            label={'Phone number'}
            property="phone_code"
            countries={countries}
            handleClick={handleSelectOption}
          /> */}

          <Select
            activeData={activeData || cookie}
            label={'Country'}
            property="country_name"
            countries={countries}
            handleClick={handleSelectOption}
          />

          {/* ========== Footer ========= */}

          <SubmitButton>Claim your free consultation now</SubmitButton>
        </form>
      </div>
    </div>
  );
};

export default Form;
