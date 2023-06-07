type ParentProps = {
  children: React.ReactNode; // if we pass react component as children 
};

const Parent = (props: ParentProps) => {
  return <h2>{props.children}</h2>;
};

export default Parent;
