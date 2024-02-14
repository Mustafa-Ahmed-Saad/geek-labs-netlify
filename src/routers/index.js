import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "../components/mainLayout/MainLayout";
import Trading from "../components/pages/trading/Trading";
import Automation from "../components/pages/automation/Automation";
import Portfolio from "../components/pages/portfolio/Portfolio";
import Error404 from "../components/pages/error404/Error404";
import Alerts from "../components/pages/alerts/Alerts";
import Training from "../components/pages/training/Training";

const appRouters = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="alerts" />,
      },
      {
        path: "alerts",
        element: <Alerts />,
      },
      {
        path: "trading",
        element: <Trading />,
      },
      {
        path: "automation",
        element: <Automation />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "training",
        element: <Training />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

export default appRouters;
