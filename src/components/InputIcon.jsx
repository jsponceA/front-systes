const InputIcon = ({ label, icon, size, className, ...props }) => {
  return (
    <>
      <label className="my-0">{label}</label>
      <div className={`input-group ${size ? "input-group-" + size : ""}`}>
        <span className="input-group-text border border-secondary">{icon}</span>
        <input
          className={`form-control border border-secondary ${className || ""}`}
          {...props}
        />
      </div>
    </>
  );
};

export default InputIcon;
