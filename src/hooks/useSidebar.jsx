const useSidebar = () => {
  const toggleSideBar = (e) => {
    e.preventDefault();
    document
      .getElementsByClassName("dashboard-sidebar")[0]
      .classList.toggle("d-none");
    document
      .getElementsByClassName("dashboard-header")[0]
      .classList.toggle("ms-0");
    document
      .getElementsByClassName("dashboard-main-content")[0]
      .classList.toggle("ms-0");
    document
      .getElementsByClassName("dashboard-footer")[0]
      .classList.toggle("ms-0");
  };

  return {
    toggleSideBar,
  };
};

export default useSidebar;
