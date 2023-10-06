import profile from "../assets/icons/profile.png";

const EditPerfil = ({ handlePerfil }) => {
  return (
    <div className="w-full h-auto mt-5 flex flex-col justify-center items-center">
      <div className="w-[75%] h-[680px] border border-[#E0E0E0] bg-white shadow-md rounded-md flex flex-col">
        <div className="w-full border-b-[1px] flex items-center justify-between border-[#E0E0E0] h-32 px-5">
          <div className="flex flex-col h-full justify-center ">
            <h2 className="text-[24px] font-semibold">
              Editar Información Personal
            </h2>
            <span className="text-[#828282]">
              Los cambios se reflejarán en todos los servicios.
            </span>
          </div>
        </div>

        <div className="w-full border-b-[1px] flex items-center  border-[#E0E0E0] h-28 px-5">
          <span className="font-semibold text-[#BDBDBD] mr-28 w-[80px]">
            Foto
          </span>

          <div className="bg-zinc-700 p-2 rounded-md">
            <img className="h-12 w-12" src={profile} alt="profile" />
          </div>
        </div>

        <div className="w-full border-b-[1px] flex flex-col justify-center  border-[#E0E0E0] h-24 gap-1 px-5">
          <span className="font-semibold text-[14px] mr-28 w-[80px]">
            Nombre(s)
          </span>
          <input
            type="text"
            className="h-12 w-[80%] rounded-md border px-3"
            placeholder="Ingrese su nombre"
            name="nombre"
          />
        </div>

        <div className="w-full border-b-[1px] flex flex-col justify-center  border-[#E0E0E0] h-24 gap-1 px-5">
          <span className="font-semibold text-[14px] mr-28 w-[80px]">
            Apellido(s)
          </span>
          <input
            type="text"
            className="h-12 w-[80%] rounded-md border px-3"
            placeholder="Ingrese su apellido"
            name="apellido"
          />
        </div>

        <div className="w-full border-b-[1px] flex flex-col justify-center  border-[#E0E0E0] h-24 gap-1 px-5">
          <span className="font-semibold text-[14px] mr-28 w-[80px]">
            Usuario
          </span>
          <input
            type="text"
            className="h-12 w-[80%] rounded-md border px-3"
            placeholder="Ingrese su nuevo usuario"
            name="usuario"
          />
        </div>

        <div className="w-full border-b-[1px] flex flex-col justify-center  border-[#E0E0E0] h-24 gap-1 px-5">
          <span className="font-semibold text-[14px] mr-28 w-[80px]">
            Contraseña
          </span>
          <input
            type="text"
            className="h-12 w-[80%] rounded-md border px-3"
            placeholder="Ingrese su nueva contraseña"
            name="contrasena"
          />
        </div>
      </div>
    </div>
  );
};

export default EditPerfil;
