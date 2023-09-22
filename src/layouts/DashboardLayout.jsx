import DashboardHeader from "../components/dashboard/Header";
import DashboardFooter from "../components/dashboard/Footer";
import DashboardSidebar from "../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <>
      <DashboardHeader />
      <DashboardSidebar />
      <main className="dashboard-main-content">
        <Outlet />
      </main>
      <DashboardFooter />
    </>
  );
};

export default DashboardLayout;
