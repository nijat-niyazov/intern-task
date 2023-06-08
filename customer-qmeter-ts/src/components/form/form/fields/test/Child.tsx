type ChildProps = {
  children: string;
};

const Child = (props: ChildProps) => {
  return <div>{props.children}</div>;
};

export default Child;
