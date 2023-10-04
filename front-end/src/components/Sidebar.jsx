import { Link } from "react-router-dom";
import gear from "../assets/icons/gear.png";
import roles from "../assets/icons/roles.png";
import users from "../assets/icons/users.png";
import logs from "../assets/icons/logs.png";
import link from "../assets/icons/link.png";
import dashboard from "../assets/icons/dashboard.png";

import { useState, useEffect } from "react";

const Sidebar = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Función para realizar la llamada a la API
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/paginas/1");
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }
        const data = await response.json();
        // Guardar los datos en el estado
        setApiData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // Llamar a la función de carga de datos
    fetchData();
  }, []); // El segundo argumento [] asegura que esto solo se ejecute una vez al montar el componente

  console.log(apiData);
  return (
    <aside className="w-full h-full bg-zinc-800 px-4 py-10">
      <div className="w-full h-14 flex items-center">
        <Link to={apiData?.url} className="flex items-center gap-2">
          <img
            src={apiData?.icono === "dashboard" ? dashboard : dashboard}
            alt={apiData?.nombre}
            className="w-8 h-8 cursor-pointer"
          />
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
