import React, { useEffect, useState } from 'react';
import Down from '../icons/Down';
import FirstSection from './FirstSection';
import Input from './Input';
import Model from './Model';
import SubMenus from './SubMenus';
import { images } from './images';

const Customer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [phoneNum, setPhoneNum] = useState('');
  const [selectedCode, setSelectedCode] = useState('');
  const [cookie, setCookie] = useState('');

  const [countries, setCountries] = useState([]);
  const [iconRotation, setIconRotation] = useState({});

  const [form, setForm] = useState({});

  // const [showCodes, setShowCodes] = useState(false);
  // const [showCountries, setShowCountries] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState(null);
  // const [showCountries, setShowCountries] = useState(false);

  // const [showCodes, setShowCodes] = useState(false);

  const [finalForm, setFinalForm] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        const infos = data.map(each => {
          return {
            flag: each.flags.png,
            name: each.name.common,
            phoneCode: each.idd?.root + each.idd?.suffixes || '',
          };
        });

        setCountries(infos);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCountries();

    const cookie = async () => {
      try {
        const response = await fetch('https://geolocation-db.com/json/');
        const data = await response.json();
        setCookie(data);
      } catch (err) {
        console.log(err);
      }
    };

    cookie();
  }, []);

  const handleValue = setState => e => {
    setState(e.target.value);
  };

  const setFormData =(key) => (value) => {
    setData({
      ...data, [key]:value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    const values = {
      name,
      country: selectedCountry,
      email,
      phoneNum: selectedCode.phoneCode + phoneNum,
    };
    setFinalForm(values);
  };

  const formBackgroundImage = {
    backgroundImage: `url(${
      selectedCountry
        ? images[
            selectedCountry?.name?.toLowerCase().includes(' ')
              ? selectedCountry?.name?.toLowerCase().split(' ').join('_')
              : selectedCountry?.name?.toLowerCase()
          ]
        : images[cookie?.country_name?.toLowerCase()]
    })`,
  };

  const sourceOfCookie = countries?.find(
    country => country.name === cookie.country_name
  )?.flag;

  const activeCountry = selectedCountry?.name || cookie?.country_name;

  return (
    <div className="bg-[#f4f5f7] flex flex-col lg:flex-row lg:items-start items-center py-6 px-4 gap-10 font-sans lg:px-40">
      <FirstSection />

      <div className="rounded-lg lg:mx-10 text-[#354050] border-gray-300 border-[1px] m-auto">
        <form
          onClick={onSubmit}
          className="grid gap-4 px-6 py-14 text-sm bg-cover"
          style={formBackgroundImage}
        >
          {/* ========== Name ========= */}
          <Input
            label="Name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={handleValue(setName)}
          />
       
          {/* <div className="grid gap-1">
            <label className="font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              pattern="^\S+\s\S+$"
              placeholder="Nijat"
              value={name}
              className="rounded-md py-2 px-3 invalid:border-red-400 focus-within:outline-none valid:border-green-500 bg-transparent  border-blue-900 border-[1px]"
              onChange={handleValue(setName)}
            />
          </div> */}
        
          {/* ========== Email ========= */}
        
          <Input
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={handleValue(setEmail)}
          />

          {/* <div className="grid gap-1">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              value={email}
              className="rounded-md py-2 px-3 focus-within:outline-red-400 bg-transparent  border-blue-900 border-[1px]"
              onChange={handleValue(setEmail)}
            />
          </div> */}

          {/* ========== PhoneNum ========= */}

          {/* <Input
            placeholder={'055'}
            label={'Phone number'}
            type={'text'}
            value={phoneNum}
            onChange={handleValue(setPhoneNum)}
          >

            <Icon>
              <article className="gap-1 flex  items-center justify-between">
                <img
                  className="w-6 h-4"
                  src={selectedCode.flag || sourceOfCookie}
                  alt=""
                />
                <span>{selectedCode.phoneCode ?? cookie.country_code}</span>
              </article>
            </Icon> */}
          {/* <ul className="absolute overflow-y-scroll overflow-x-hidden h-40  z-10  py-2 w-20 bg-white rounded-md shadow-lg">
              {countries.map((country, i) => {
                return (
                  <li
                    key={i}
                    className="py-1 px-3 hover:bg-gray-100 cursor-pointer flex items-start gap-1"
                    onClick={() => setSelectedCode(country)}
                  >
                    <img
                      className="w-6 h-4"
                      src={country.flag}
                      alt="country flag"
                    />

                    <span>{country.phoneCode}</span>
                  </li>
                );
              })}
            </ul> */}
          {/* </Input> */}

          <Input
            label={'Phone number'}
            placeholder="(_ _)__ __ __ - __ __- __ __"
            type="text"
            value={phoneNum}
            onChange={handleValue(setPhoneNum)}
          >

          {/* <Model label={'Phone number'}>
            <input
              type="text"
              id="phoneNum"
              placeholder="(_ _)__ __ __ - __ __- __ __"
              value={phoneNum}
              className="w-full rounded-md py-2 px-3 pl-[100px] focus-within:outline-red-400 bg-transparent  border-blue-900 border-[1px]"
              onChange={handleValue(setPhoneNum)}
            /> */}

            <div
              className="absolute top-8 translate-y-0.5 cursor-pointer left-3 w-25"
              onClick={() => setShowCodes(p => !p)}
            >
              <section className="gap-1 flex  items-center justify-between">
                <img
                  className="w-6 h-4"
                  src={selectedCode.flag || sourceOfCookie}
                  alt=""
                />

                <span>{selectedCode.phoneCode || cookie.country_code}</span>

                <Down position="full" rotate={iconRotation['phoneCode']} />
              </section>
            </div>

            </Input>

           

          {/* ========== Country ======== */}

          <SubMenus
            list={countries}
            activeCountry={activeCountry}
            clickHandle={setSelectedCountry}
          />

          {/* ========== Footer ======== */}
          <span className="text-xs my-2 text-center">
            By filling out the form, you consent to the processing of personal
            data
          </span>
          <button
            type="submit"
            className="uppercase bg-[#354050] text-white py-4 px-10 rounded-full text-xs"
          >
            Claim your free consultation now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Customer;


 {/* <ul
              className={`absolute overflow-y-scroll overflow-x-hidden ${
                showCodes ? 'h-40 w-24' : 'h-0 w-0'
              }  z-10  py-2 transition-[height] duration-300  bg-white rounded-md shadow-lg top-full w-24`}
            >
              {countries.map((country, i) => {
                return (
                  <li
                    key={i}
                    className="py-1 px-3 hover:bg-gray-100 cursor-pointer flex items-start gap-1"
                    onClick={() => {
                      setSelectedCode(country);
                      setShowCodes(false);
                    }}
                  >
                    <img
                      className="w-6 h-4"
                      src={country.flag}
                      alt="country flag"
                    />

                    {country.phoneCode}
                  </li>
                );
              })}
            </ul> */}

            {/* <ul
              className={`absolute overflow-y-scroll overflow-x-hidden ${
                showCodes ? 'h-40 w-24' : 'h-0 w-0'
              }  z-10  py-2 transition-[height] duration-300  bg-white rounded-md shadow-lg top-full w-24`}
            >
              {countries.map((country, i) => {
                return (
                  <li
                    key={i}
                    className="py-1 px-3 hover:bg-gray-100 cursor-pointer flex items-start gap-1"
                    onClick={() => {
                      setSelectedCode(country);
                      setShowCodes(false);
                    }}
                  >
                    <img
                      className="w-6 h-4"
                      src={country.flag}
                      alt="country flag"
                    />

                    {country.phoneCode}
                  </li>
                );
              })}
            </ul> */}
          {/* </Model> */}