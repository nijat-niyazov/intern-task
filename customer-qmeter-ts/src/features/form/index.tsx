import {
  BaseSyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { FirstSection, LastSection } from '../../components/form/sections';
import { initialData } from '../../data/form/initialData';
import { useFetchData } from '../../hooks/form';
import { CountriesData } from '../../interfaces/form';
import { images } from '../../utils/images';

import Button from '../../components/form/buttons';
import { Input, Select } from '../../components/form/fields';
import FieldShape from '../../components/form/shape';
import {
  errorsOnValidation,
  validateInput,
} from '../../utils/validation/validation';

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
      console.log(name);

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

  // console.log(errorsOnValidation);

  //  Background Image On Cookie
  const backgroundImage = useMemo(() => {
    return {
      backgroundImage: `url(${
        images[cookie?.country_code?.toLowerCase() ?? 'us']
      })`,
    };
  }, [cookie]);

  return (
    <div className="bg-[#f4f5f7] flex overflow-x-hidden flex-col lg:flex-row lg:items-start items-center py-6 px-4 gap-10 font-sans lg:px-40">
      <FirstSection />

      <div className="rounded-lg lg:mx-10 text-[#354050] border-gray-300 border-[1px] m-auto">
        <form
          className="grid gap-4 px-6 py-14 text-sm bg-cover"
          onSubmit={handleSubmit}
          style={backgroundImage}
        >
          {/* ========== Inputs ========= */}

          {inputData.map((field: any, i: number) => (
            <FieldShape key={i} label={field?.label}>
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

          {/* ========== Footer ========= */}

          <LastSection />

          <Button type="submit">Claim your free consultation now</Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
