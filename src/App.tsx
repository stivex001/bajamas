import { Toaster } from "sonner";
import { ScreenLoader } from "./components/shared/ScreenLoader";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import ProtectedRoutes from "./components/layouts/ProtectedRoutes";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import NotFound from "./pages/NotFound";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Notifications = lazy(() => import("./pages/Notifications"));
const EmailCampaign = lazy(() => import("./pages/dashboard/EmailCampaign"));

const router = createBrowserRouter([
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
          {
            path: "/notifications",
            element: <Notifications />,
            index: true,
          },
          {
            path: "/email_campaign",
            element: <EmailCampaign />,
            index: true,
          },
          {
            path: "/sms_campaign",
            element: <Dashboard />,
            index: true,
          },
          {
            path: "/templates",
            element: <Dashboard />,
            index: true,
          },
          {
            path: "/list",
            children:[
              {
                path: "",
                index: true,
                element: <Dashboard />,
              },
              {
                path: "overview",
                index: true,
                element: <Dashboard />,
              },
              {
                path: "subscribers",
                index: true,
                element: <Dashboard />,
              },
              {
                path: "overview",
                index: true,
                element: <Dashboard />,
              },
              {
                path: "unsubscribes",
                index: true,
                element: <Dashboard />,
              },
              {
                path: "overview",
                index: true,
                element: <Dashboard />,
              },
              {
                path: "spam_report",
                index: true,
                element: <Dashboard />,
              },
              {
                path: "tag",
                index: true,
                element: <Dashboard />,
              },
              {
                path: "collaboration",
                index: true,
                element: <Dashboard />,
              },
              {
                path: "invites",
                index: true,
                element: <Dashboard />,
              },
            ]
          },
          {
            path: "/sending_blacklist",
            element: <Dashboard />,
            index: true,
          },
          {
            path: "/pricing",
            element: <Dashboard />,
            index: true,
          },
          {
            path: "/api",
            element: <Dashboard />,
            index: true,
          },
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
      <Suspense fallback={<ScreenLoader />}>
        <Toaster position="top-center" />
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
