import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import AdminDashboard from "./components/AdminPages/AdminDashboard";
import Parametros from "./components/AdminPages/Parametros";
import Roles from "./components/AdminPages/Roles";
import Usuarios from "./components/AdminPages/Usuarios";
import Bitacoras from "./components/AdminPages/Bitacoras";
import Enlaces from "./components/AdminPages/Enlaces";
import Perfil from "./components/AdminPages/Perfil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Admin Routes */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/admin/parametros" element={<Parametros />} />
        <Route path="/admin/roles" element={<Roles />} />
        <Route path="/admin/usuarios" element={<Usuarios />} />
        <Route path="/admin/bitacoras" element={<Bitacoras />} />
        <Route path="/admin/enlaces" element={<Enlaces />} />
        <Route path="/admin/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
