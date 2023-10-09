import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import axios from "axios";

export default function EnlaceEdit({
  id,
  pUrl,
  pEstado,
  pNombre,
  pIcono,
  pTipo,
}) {
  let [isOpen, setIsOpen] = useState(false);

  const [url, setUrl] = useState("");
  const [estado, setEstado] = useState("");
  const [nombre, setNombre] = useState("");
  const [icono, setIcono] = useState("");
  const [tipo, setTipo] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/paginas/${id}`,
        {
          url: url,
          estado: estado,
          nombre: nombre,
          icono: icono,
          tipo: tipo,
        }
      );

      if (response.status === 200) {
        console.log("Success");
        window.location.reload();
      } else {
        console.error("Error to edit user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="font-semibold border p-2 px-3 rounded-md bg-blue-700 text-white"
        >
          Editar
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Editar Enlace
                  </Dialog.Title>
                  <div className="mt-2 w-full">
                    <form className="w-full" action="" onSubmit={handleSubmit}>
                      <div className="w-full flex flex-col gap-1">
                        <span className="font-semibold underline">Url</span>
                        <input
                          className="border h-10 rounded-md px-3"
                          type="text"
                          placeholder={pUrl}
                          onChange={(e) => setUrl(e.target.value)}
                          value={url}
                        />
                      </div>

                      <div className="w-full flex flex-col gap-1">
                        <span className="font-semibold underline">Nombre</span>
                        <input
                          className="border h-10 rounded-md px-3"
                          type="text"
                          placeholder={pNombre}
                          onChange={(e) => setNombre(e.target.value)}
                          value={nombre}
                        />
                      </div>

                      <div className="w-full flex flex-col gap-1">
                        <span className="font-semibold underline">Icono</span>
                        <select
                          className="border h-10 rounded-md px-3 "
                          onChange={(e) => setIcono(e.target.value)}
                        >
                          <option value="" defaultValue>
                            {pIcono}
                          </option>
                          <option value="parametros">Parametros</option>
                          <option value="dashboard">Dashboard</option>
                          <option value="link">Enlace</option>
                          <option value="roles">Roles</option>
                          <option value="bitacoras">Bitacoras</option>
                          <option value="usuarios">Usuarios</option>
                        </select>
                      </div>

                      <div className="w-full flex flex-col gap-1">
                        <span className="font-semibold underline">Tipo</span>
                        <select
                          className="border h-10 rounded-md px-3"
                          onChange={(e) => setTipo(e.target.value)}
                        >
                          <option value="" defaultValue>
                            {pTipo}
                          </option>
                          <option value="admin">Admin</option>
                          <option value="user">User</option>
                        </select>
                      </div>

                      <div className="w-full flex flex-col gap-1">
                        <span className="font-semibold underline">Estado</span>
                        <select
                          className="border h-10 rounded-md px-3"
                          onChange={(e) => setEstado(e.target.value)}
                        >
                          <option value="" defaultValue>
                            {pEstado}
                          </option>
                          <option value="activo">Activo</option>
                          <option value="inactivo">Inactivo</option>
                        </select>
                      </div>
                      <div className="mt-4 flex gap-3">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Cancelar
                        </button>

                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Guardar
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
