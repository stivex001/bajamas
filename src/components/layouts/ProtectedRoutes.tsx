import { Navigate, Outlet } from "react-router-dom";
// import { useAuthStore } from "../../store/authStore";

const ProtectedRoutes = () => {
  // const { accessToken, currentUser } = useAuthStore();
  const accessToken = "sdgugusdguihsdui"
  const currentUser = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  }

  if (!accessToken || !currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
