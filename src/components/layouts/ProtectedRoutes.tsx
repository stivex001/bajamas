import { useAuthStore } from "@/store/authStore";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { accessToken, currentUser } = useAuthStore();

  if (!accessToken || !currentUser) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
