import { Outlet } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
const Root = () => {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
};

export default Root;
