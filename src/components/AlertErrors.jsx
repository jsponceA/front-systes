import { useEffect, useState } from "react";

const AlertErrors = ({ title, type, show, errors = [] }) => {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    setIsShow(show);
  }, [show]);
  return (
    <div
      className={`alert alert-${type} alert-dismissible fade ${
        isShow ? "show" : "d-none"
      }`}
      role="alert"
    >
      <p className="mt-0 mb-1 fw-semibold">{title}</p>
      <ul className="mb-0">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <button
        onClick={() => setIsShow(false)}
        type="button"
        className="btn-close"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default AlertErrors;
