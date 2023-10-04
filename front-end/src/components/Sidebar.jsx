import { Link } from "react-router-dom";
import gear from "../assets/icons/gear.png";
import roles from "../assets/icons/roles.png";
import users from "../assets/icons/users.png";
import logs from "../assets/icons/logs.png";
import link from "../assets/icons/link.png";
import dashboard from "../assets/icons/dashboard.png";

const Sidebar = () => {
  return (
    <aside className="w-full h-full bg-zinc-800 px-4 py-10">
      <div className="w-full h-14 flex items-center">
        <Link to="/admindashboard" className="flex items-center gap-2">
          <img src={dashboard} alt="" className="w-8 h-8 cursor-pointer" />
          <span className="text-white font-semibold cursor-pointer">
            Dashboard
          </span>
        </Link>
      </div>
      <div className="h-[1px] w-[90%] bg-zinc-400 mb-5 mt-3" />
      <div className="w-full h-14 flex items-center">
        <Link to="/admin/parametros" className="flex items-center gap-2">
          <img src={gear} alt="" className="w-8 h-8 cursor-pointer" />
          <span className="text-white font-semibold cursor-pointer">
            Parametros
          </span>
        </Link>
      </div>
      <div className="w-full h-14 flex items-center">
        <Link to="/admin/roles" className="flex items-center gap-2">
          <img src={roles} alt="" className="w-8 h-8 cursor-pointer" />
          <span className="text-white font-semibold cursor-pointer">Roles</span>
        </Link>
      </div>

      <div className="w-full h-14 flex items-center">
        <Link to="/admin/usuarios" className="flex items-center gap-2">
          <img src={users} alt="" className="w-8 h-8 cursor-pointer" />
          <span className="text-white font-semibold cursor-pointer">
            Usuarios
          </span>
        </Link>
      </div>

      <div className="w-full h-14 flex items-center">
        <Link to="/admin/bitacoras" className="flex items-center gap-2">
          <img src={logs} alt="" className="w-8 h-8 cursor-pointer" />
          <span className="text-white font-semibold cursor-pointer">
            Bitacoras
          </span>
        </Link>
      </div>

      <div className="w-full h-14 flex items-center">
        <Link to="/admin/enlaces" className="flex items-center gap-2">
          <img src={link} alt="" className="w-8 h-8 cursor-pointer" />
          <span className="text-white font-semibold cursor-pointer">
            Enlaces
          </span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
