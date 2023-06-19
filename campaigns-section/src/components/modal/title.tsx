const Title = ({ typeOfModal }: { typeOfModal: string }) => {
  return (
    <div className="flex w-full bg-[#335c9a] items-center justify-between px-6 py-4 text-white">
      <span>Create new {typeOfModal} template</span>
      <button className="font-extralight">X</button>
    </div>
  );
};

export default Title;
