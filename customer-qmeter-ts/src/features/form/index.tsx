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
import { validateInput, validation } from '~/utils/form/validation/validation';

const Form = () => {
  const [inputData, setInputData] = useState(initialData);
  const [phoneNumber, setPhoneNumber] = useState('');

  const [selectedPhoneCode, setSelectedPhoneCode] = useState({});

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
      // console.log(name);

      // ========== Validation of input ==========
      validateInput(name, value);

      setInputData((fields: {}[]) =>
        fields.map((field: any) => {
          return field['label'].toLowerCase() === name
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

  const valuesOfInput = useMemo(() => {
    return inputData.reduce((result, input) => {
      const { label, value } = input;

      result[label.toLowerCase()] = value;
      return result;
    }, {});
  }, [inputData]);

  // Submit Function
  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const form = {
      ...valuesOfInput,
      number: selectedPhoneCode?.phone_code + phoneNumber,
      country: selectedCountry?.country_name,
    };

    setFinalForm(form);
  };

  //  Background Image On CookieData
  const backgroundImage = useMemo(() => {
    return {
      backgroundImage: `url(${
        images[cookie?.country_code?.toLowerCase() ?? 'us']
      })`,
    };
  }, [cookie]);

  console.log(validation['name']);

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
          label={field?.label}
          error={validation[field?.label.toLowerCase()]}
        >
          <Input
            name={field?.label?.toLowerCase()}
            value={field?.value}
            id={field?.label}
            placeholder={field?.placeholder}
            handleState={handleChange}
          />
        </FieldShape>
      ))}

      {/* ========== Selects ========= */}

      <FieldShape label="Select">
        <Select
          activeData={selectedPhoneCode || cookie}
          label={'Phone number'}
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
            validateInput('phoneNumber', e.target.value);
            setPhoneNumber(e.target.value);
          }}
        />
      </FieldShape>

      <FieldShape label="Country">
        <Select
          activeData={selectedCountry || cookie}
          label={'Country'}
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
