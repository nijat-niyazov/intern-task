import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useFetchData } from '../../hooks/form';

import Button from '../../components/form/form/buttons';
import Input from '../../components/form/form/fields/input';
import Select from '../../components/form/form/fields/select';

import FieldShape from '../../components/form/form/fields/shape';
import { FirstSection, LastSection } from '../../components/form/form/sections';
import { initialData } from '../../data/form/initialData';
import { CountriesData } from '../../interfaces/form';
import { images } from '../../utils/images';

const Form = () => {
  const [formData, setFormdata] = useState(initialData);
  const [activeData, setActiveData] = useState({});
  const [activePhone, setActivePhone] = useState({});
  const { countries, cookie } = useFetchData();

  console.log(countries);

  useEffect(() => {
    setActiveData(
      countries.find(
        (c: CountriesData) => c.country_name === cookie?.country_name
      )
    );
    setActivePhone(
      countries.find(
        (c: CountriesData) => c.country_name === cookie?.country_name
      )
    );
  }, [cookie]);

  // ============== Handle Functions =============

  const handleChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;

    setFormdata((fields: {}[]) =>
      fields.map((field: any) => {
        return field['label'].toLowerCase() === name
          ? { ...field, value }
          : field;
      })
    );
  };

  const handleSelectOption = setState => (data: any) => {
    setState(data);
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
  };

  const formBackgroundImage = {
    backgroundImage: `url(${
      images[(activeData || cookie)?.country_code?.toLowerCase()]
    })`,
  };

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

          {formData.map((field: any, i: number) => (
            <Input
              key={i}
              name={field?.label?.toLowerCase()}
              value={field?.value}
              label={field?.label}
              id={field?.label}
              placeholder={field?.placeholder}
              handleState={handleChange}
              selectable={field?.selectable}
              {...(field?.hasOwnProperty('selectable')
                ? {
                    selectable: field?.selectable,
                    activeData: activePhone || cookie,
                    // label:'Country'
                    properties: ['phone_code', 'icon'],
                    data: countries ? countries : [],
                    handleClick: () => handleSelectOption(setActivePhone),
                    width: '30%',
                  }
                : null)}
            />
          ))}

          {/* ========== Selects ========= */}

          {/* <Select
            activeData={activeData || cookie}
            label={'Phone number'}
            property="phone_code"
            countries={countries}
            handleClick={handleSelectOption}
          /> */}

          <FieldShape label="Country">
            <Select
              activeData={activeData || cookie}
              label={'Country'}
              properties={['country_name']}
              data={countries}
              handleClick={handleSelectOption(setActiveData)}
              width="100%"
            />
          </FieldShape>

          {/* ========== Footer ========= */}
          <LastSection />

          <Button type="submit">Claim your free consultation now</Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
