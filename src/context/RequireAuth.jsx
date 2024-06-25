import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../customHooks/useAuth";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  const isAuthSession = !sessionStorage.getItem("user") && !auth.user;

  if (isAuthSession) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
