import { Outlet } from "react-router-dom";

import MainTabs from "../mainTabs/MainTabs";
import Navbar from "../navbar/Navbar";

const MainLayout = () => (
  <>
    <Navbar />
    <MainTabs />
    <Outlet />
  </>
);

export default MainLayout;
