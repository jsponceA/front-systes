const SelectIcon = ({ label, icon, size, className, options, ...props }) => {
  return (
    <>
      <label className="my-0">{label}</label>
      <div className={`input-group ${size ? "input-group-" + size : ""}`}>
        <span className="input-group-text border border-secondary">{icon}</span>
        <select
          className={`form-select border border-secondary ${className || ""}`}
          {...props}
        >
          {options}
        </select>
      </div>
    </>
  );
};

export default SelectIcon;
