const Model = ({ label, children }) => {
  return (
    <div className="relative grid gap-1">
      <label className="font-semibold" htmlFor={label}>
        {label}
      </label>

      {children}
    </div>
  );
};

export default Model;
