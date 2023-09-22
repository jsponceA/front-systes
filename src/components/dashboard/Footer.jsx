const APP_NAME = import.meta.env.VITE_APP_NAME;
const DashboardFooter = () => {
  return (
    <footer className="bg-secondary bg-opacity-50 bg-gradient mt-auto dashboard-footer">
      <p className="text-end my-1 fw-semibold " style={{ fontSize: ".8rem" }}>
        {APP_NAME} TODOS LOS DERECHOS RESERVADOS © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default DashboardFooter;
