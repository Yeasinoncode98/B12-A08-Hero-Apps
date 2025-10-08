import { createBrowserRouter } from "react-router";

import MainLayouts from "../Layouts/MainLayouts";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import Detailes from "../Pages/Detailes";
import Installtion from "../Pages/Installtion";
// import AppNotFound from "../Componants/AppNotFound";

export const route = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allapps",
        Component: AllApps,
      },
      {
        path: "/detailes/:id",
        Component: Detailes,
      },
      {
        path: "/installiton",
        Component: Installtion,
      },
    ],
  },
]);
