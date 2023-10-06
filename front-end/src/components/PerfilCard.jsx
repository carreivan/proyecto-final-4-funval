import profile from "../assets/icons/profile.png";

const PerfilCard = ({ handlePerfil }) => {
  return (
    <div className="w-full h-auto mt-5 flex flex-col justify-center items-center">
      <h2 className="font-semibold text-[25px] text-zinc-700 mb-3">
        Información Personal
      </h2>

      <span className="font-semibold mb-5">
        Información básica, como tu nombre y foto.
      </span>
      <div className="w-[75%] h-[640px] border border-[#E0E0E0] bg-white shadow-md rounded-md flex flex-col">
        <div className="w-full border-b-[1px] flex items-center justify-between border-[#E0E0E0] h-32 px-5">
          <div className="flex flex-col h-full justify-center ">
            <h2 className="text-[24px] font-semibold">Perfil</h2>
            <span className="text-[#828282]">
              Alguna información puede ser visible para otras personas.
            </span>
          </div>
          <button
            onClick={handlePerfil}
            className="border border-[#828282] rounded-[12px] w-[95px] h-[38px] text-[#828282] font-semibold hover:shadow-md"
          >
            Editar
          </button>
        </div>

        <div className="w-full border-b-[1px] flex items-center  border-[#E0E0E0] h-28 px-5">
          <span className="font-semibold text-[#BDBDBD] mr-28 w-[80px]">
            Foto
          </span>

          <div className="bg-zinc-700 p-2 rounded-md">
            <img className="h-12 w-12" src={profile} alt="profile" />
          </div>
        </div>

        <div className="w-full border-b-[1px] flex items-center  border-[#E0E0E0] h-20 px-5">
          <span className="font-semibold text-[#BDBDBD] mr-28 w-[80px]">
            Nombre(s)
          </span>
          <span className="font-semibold">John</span>
        </div>

        <div className="w-full border-b-[1px] flex items-center  border-[#E0E0E0] h-20 px-5">
          <span className="font-semibold text-[#BDBDBD] mr-28 w-[80px]">
            Apellido(s)
          </span>
          <span className="font-semibold">Carr</span>
        </div>

        <div className="w-full border-b-[1px] flex items-center  border-[#E0E0E0] h-20 px-5">
          <span className="font-semibold text-[#BDBDBD] mr-28 w-[80px]">
            Rol
          </span>
          <span className="font-semibold">User</span>
        </div>

        <div className="w-full border-b-[1px] flex items-center  border-[#E0E0E0] h-20 px-5">
          <span className="font-semibold text-[#BDBDBD] mr-28 w-[80px]">
            Usuario
          </span>
          <span className="font-semibold">johncarr@gmail.com</span>
        </div>

        <div className="w-full border-b-[1px] flex items-center  border-[#E0E0E0] h-20 px-5">
          <span className="font-semibold text-[#BDBDBD] mr-28 w-[80px]">
            Contraseña
          </span>
          <span className="font-semibold">*************</span>
        </div>
      </div>
    </div>
  );
};

export default PerfilCard;
