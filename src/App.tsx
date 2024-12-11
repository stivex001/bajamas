import { Toaster } from "sonner";
import { ScreenLoader } from "./components/shared/ScreenLoader";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import ProtectedRoutes from "./components/layouts/ProtectedRoutes";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/reset_password",
    element: <ResetPassword />,
  },

  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
            index: true,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Suspense fallback={<ScreenLoader />}>
        <Toaster position="top-center" />
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
