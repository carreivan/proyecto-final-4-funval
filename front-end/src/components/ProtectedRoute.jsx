import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children, user, redirectTo = "/", rol }) => {
  if (!user || user.usuario.idrol === rol) {
    return <Navigate to={redirectTo} />;
  }
  return <Outlet />;
};
