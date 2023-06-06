import Model from './Model';

const Input = ({ label, placeholder, type, value, onChange,children }) => {
  return (
    <Model label={label}>
      
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        className="rounded-md py-2 px-3 focus-within:outline-red-400 bg-transparent  border-blue-900 border-[1px]"
        onChange={onChange}
      />
      {children}
    </Model>
  );
};

export default Input;
