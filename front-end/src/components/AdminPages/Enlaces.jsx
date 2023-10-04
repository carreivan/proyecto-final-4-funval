import DashboardNav from "../DashboardNav";
import Sidebar from "../Sidebar";

const Enlaces = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <DashboardNav />
      <div className="w-full h-full flex">
        <div className="w-[25%] max-w-[300px] h-full">
          <Sidebar />
        </div>
        <div className="w-full h-full p-2 z-10"></div>
      </div>
    </div>
  );
};

export default Enlaces;
