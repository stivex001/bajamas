import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const ProtectedRoutes = () => {
  const { accessToken, currentUser } = useAuthStore();

  if (!accessToken || !currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
