const ButtonLoader = ({
  className,
  icon,
  label,
  labelLoader,
  loader,
  ...props
}) => {
  return (
    <>
      {!loader ? (
        <button className={className} {...props}>
          {icon} {label}
        </button>
      ) : (
        <button className={className} type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>{" "}
          <span role="status">{labelLoader}</span>
        </button>
      )}
    </>
  );
};

export default ButtonLoader;
