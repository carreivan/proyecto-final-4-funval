import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import axios from "axios";

export default function UsuarioModal() {
  let [isOpen, setIsOpen] = useState(false);
  const [usuario, setUsername] = useState("");
  const [clave, setPassword] = useState("");
  const [idrol, setRol] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/usuarios", {
        usuario,
        clave,
        habilitado: 1,
        idrol,
      });
      console.log("User created:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error while create an user:", error);
    }
  }

  return (
    <>
      <div className=" flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="font-semibold border p-2 px-3 rounded-md bg-zinc-700 text-white"
        >
          Crear Usuario
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
                    Crear Nuevo Usuario
                  </Dialog.Title>
                  <div className="mt-2 w-full">
                    <form className="w-full" action="" onSubmit={handleSubmit}>
                      <div className="w-full flex flex-col gap-1">
                        <span className="font-semibold underline">Usuario</span>
                        <input
                          className="border h-10 rounded-md px-3"
                          type="text"
                          placeholder="Nombre del Rol"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="w-full flex flex-col gap-1">
                        <span className="font-semibold underline">Clave</span>
                        <input
                          className="border h-10 rounded-md px-3"
                          type="password"
                          placeholder="Nombre del Rol"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="w-full flex flex-col gap-1">
                        <span className="font-semibold underline">Rol</span>
                        <select
                          className="border h-10 rounded-md px-3"
                          onChange={(e) => setRol(e.target.value)}
                        >
                          <option value={1}>Admin</option>
                          <option value={2}>User</option>
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
                          Crear
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
