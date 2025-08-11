import { Toaster } from "sonner";
import LoadingScreen from "./components/shared/ScreenLoader";
import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import ProtectedRoutes from "./components/layouts/ProtectedRoutes";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/auth/ForgotPassword";

// const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            index: true,
            element: <Navigate to="/dashboard" replace />,
          },
          // {
          //   path: "/dashboard",
          //   element: <Dashboard />,
          // },

         
          // {
          //   path: "/api",
          //   element: <Api />,
          //   index: true,
          // },
        ],
      },
    ],
  },

  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },

  {
    path: "/auth/forgot_password",
    element: <ForgotPassword />,
  },
  {
    path: "/auth/reset_password",
    element: <ResetPassword />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <Toaster position="top-center" />
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
