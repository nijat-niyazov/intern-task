const List = ({ data }: { data: any }) => {
  return (
    <ul className="my-6 grid gap-2">
      {Object.entries(data).map(
        ([key, value], index) =>
          key !== 'logo' && (
            <li
              key={index}
              style={{
                borderBottomWidth:
                  index === Object.entries(data).length - 1 ? '0px' : '1px',
              }}
              className="flex px-2 items-center gap-3  border-gray-200 pb-2 text-[#65676b] font-extralight text-ellipsis "
            >
              <span>{key.split('_').join(' ')}:</span>
              <span>{value as string}</span>
            </li>
          )
      )}
    </ul>
  );
};

export default List;
