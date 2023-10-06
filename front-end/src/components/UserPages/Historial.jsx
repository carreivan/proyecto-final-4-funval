import DashboardNav from "../DashboardNav";
import UserSidebar from "../UserSidebar";

const Historial = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <DashboardNav profileLink={"/user/perfil"} />
      <div className="w-full h-full flex">
        <div className="w-[25%] max-w-[300px] h-full">
          <UserSidebar />
        </div>
        <div className="w-full h-full p-2 z-10 flex flex-col">
          <div className="w-full h-12 flex items-center justify-end px-3">
            <span className="font-semibold">Usuario / Historial</span>
          </div>

          <div className="w-full h-16 mt-10 flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Historial;
