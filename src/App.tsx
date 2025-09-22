import { Toaster } from "sonner";
import LoadingScreen from "./components/shared/ScreenLoader";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/landingpage/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        // element: <ProtectedRoutes />,
        children: [
          // {
          //   index: true,
          //   element: <Navigate to="/" replace />,
          // },
          {
            path: "/",
            element: <Home />,
          },

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
