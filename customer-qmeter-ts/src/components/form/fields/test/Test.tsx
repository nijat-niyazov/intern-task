type TestProps = {
  test: {
    first: string;
    number: number;
    isLoggedIn: boolean;
  };
  author?: string;
  // it means optional, so if we even haven't sent prop from parent element it will check and see optional. Won't throw error
};

const Test = (props: TestProps) => {
  console.log(props);

  return (
    <div>
      <h1>
        {props.test.first}+{props.test.number}
      </h1>
    </div>
  );
};

export default Test;
