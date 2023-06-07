type ListProps = {
  // this keyword must be same with passed prop key
  list: {
    first: string;
    last: string;
  }[];
  // array of objects
};

const TestList = (props: ListProps) => {
  return (
    <ul>
      {props.list.map((test, i) => (
        <li key={i}>{test.first + test.last}</li>
      ))}
    </ul>
  );
};

export default TestList;
