import { nameFixer } from '~/pages/settings/licensing/utils/nameFixer';

const List = ({ data }: { data: any }) => {
  return (
    <ul className="flex flex-col">
      {Object.entries(data).map(
        ([key, value], index) =>
          key !== 'logo' && (
            <li
              key={index}
              style={{
                borderBottomWidth:
                  index === Object.entries(data).length - 1 ? '0px' : '1px',
              }}
              className="flex p-2 items-center justify-between text-md border-gray-300  text-[#65676b] font-extralight text-ellipsis "
            >
              <span>{nameFixer(key.split('_').join(' '))}:</span>
              <span className={key === 'expires' ? 'text-red-500' : ''}>
                {value as string}
              </span>
            </li>
          )
      )}
    </ul>
  );
};

export default List;
