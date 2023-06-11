import {
  BaseSyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { LastSection } from '~/components/form/sections';
import { initialData } from '~/data/form/initialData';
import { useFetchData } from '~/hooks/form';

import Button from '~/components/form/buttons';
import FieldShape from '~/components/form/fieldShape';
import { Input, Select } from '~/components/form/fields';
import { CountriesData } from '~/interfaces/form';
import { images } from '~/utils/form/images';
import { errorField } from '~/utils/form/validation/errorField';
import { validateInput } from '~/utils/form/validation/validation';

const Form = () => {
  const [inputData, setInputData] = useState(initialData);

  const [selectedPhoneCode, setSelectedPhoneCode] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({});

  const [finalForm, setFinalForm] = useState(null);

  const { countries, cookie } = useFetchData();

  // ========== ActiveData on first Mount ==========

  useEffect(() => {
    const activeCountry = countries.find(
      (c: CountriesData) => c.country_name === cookie?.country_name
    );

    setSelectedCountry(activeCountry);
    setSelectedPhoneCode(activeCountry);
  }, [cookie]);

  // ========== Input value Handler ==========

  const handleChange = useCallback(
    (e: BaseSyntheticEvent) => {
      const { name, value } = e.target;

      // ========== Validation of input ==========
      validateInput(errorField(name), value);

      setInputData((fields: {}[]) =>
        fields.map((field: any) => {
          return field?.name.toLowerCase() === name
            ? { ...field, value }
            : field;
        })
      );
    },
    [inputData]
  );

  const handleSelectOption = (setState: any) => (data: any) => {
    setState(data);
  };

  // ========== inputValues for Submit ==========

  const valuesOfInputs = useMemo(() => {
    return inputData.reduce((result, input) => {
      const { name, value } = input;

      result[name.toLowerCase()] = value;
      return result;
    }, {});
  }, [inputData]);

  // ================ submit function ================
  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const form = {
      ...valuesOfInputs,
      phoneNumber: selectedPhoneCode?.phone_code + phoneNumber,
      country: selectedCountry?.country_name,
    };

    setFinalForm(form);
  };

  // ========== background image based on cookieData ===========
  const backgroundImage = useMemo(() => {
    return {
      backgroundImage: `url(${
        images[cookie?.country_code?.toLowerCase() ?? 'us']
      })`,
    };
  }, [cookie]);

  console.log(finalForm);

  return (
    <form
      className="grid rounded-xl gap-4 border-gray-300 border-[1px] m-auto text-[#354050] px-6 py-14 text-sm bg-cover"
      onSubmit={handleSubmit}
      style={backgroundImage}
    >
      {/* ========== Inputs ========= */}

      {inputData.map((field: any, i: number) => (
        <FieldShape
          key={i}
          label={field?.name}
          // error={validation[errorField(field.name)]}
        >
          <Input
            name={field?.name}
            value={field?.value}
            id={field?.name}
            placeholder={field?.placeholder}
            handleState={handleChange}
          />
        </FieldShape>
      ))}

      {/* ========== Selects ========= */}

      <FieldShape label="Phone Number">
        <Select
          activeData={selectedPhoneCode || cookie}
          properties={['icon', 'phone_code']}
          data={countries}
          handleClick={handleSelectOption(setSelectedPhoneCode)}
          width="25%"
        />

        <Input
          name={'Phone number'}
          value={phoneNumber}
          id={'phone_number'}
          placeholder={'(_ _)__ __ __ - __ __- __ __'}
          handleState={e => {
            validateInput('phonenumber', e.target.value);
            setPhoneNumber(e.target.value);
          }}
        />
      </FieldShape>

      <FieldShape label="Country">
        <Select
          activeData={selectedCountry || cookie}
          properties={['country_name']}
          data={countries}
          handleClick={handleSelectOption(setSelectedCountry)}
          width="100%"
        />
      </FieldShape>

      <LastSection />

      <Button type="submit">Claim your free consultation now</Button>
      {/* <Button type="submit">Claim your free consultation now</Button> */}
    </form>
  );
};

export default Form;
