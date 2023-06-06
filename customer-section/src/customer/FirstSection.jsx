const FirstSection = () => {
  return (
    <section className="flex flex-col lg:items-start items-center justify-center  gap-4  text-center  lg:w-1/2  text-[#5d6878] ">
      <article className="text-3xl lg:text-left">
        <h2 className="font-normal">Transform your</h2>
        <p className="block text-[#0f62fe]">Customer Experience</p>
      </article>

      <div className="flex text-justify relative items-center justify-center">
        <div className="absolute z-0 top-2 left-0 bg-[url(https://qmeter.net/_next/static/media/dots.5d09f8d4.svg)] w-[170px] h-[170px] mt-4 opacity-80  bg-[length:100px_200px] bg-no-repeat"></div>
        <p className="z-10 bg-[#f4f5f7] m-6 mr-0 p-4 text-md lg:text-2xl   font-light  text-black">
          Get callback from our professionals to receive a free consultation and
          define a customized solution for your business needs. We have
          demonstrated experience in this field and are ready to support you
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
