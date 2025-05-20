import "index.css";

import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "Components/App";
import {
  ABOUT_PATH,
  COTN_PATH,
  DWINDLE_PATH,
  GGJ_PATH,
  HOME_PATH,
  PM_PATH,
  RESUME_PATH,
  WSID_PATH,
} from "Util/constants";

const Home = lazy(() => import("Components/Pages/Home"));
const About = lazy(() => import("Components/Pages/About"));
const Resume = lazy(() => import("Components/Pages/Resume"));
const COTN = lazy(() => import("Components/Projects/COTN"));
const Dwindle = lazy(() => import("Components/Projects/Dwindle"));
const GGJ = lazy(() => import("Components/Projects/GGJ"));
const PM = lazy(() => import("Components/Projects/PM"));
const WSID = lazy(() => import("Components/Projects/WSID"));

const router = createBrowserRouter([
  {
    children: [
      { element: <Home />, index: true },
      { element: <About />, path: ABOUT_PATH },
      { element: <Resume />, path: RESUME_PATH },
      { element: <COTN />, path: COTN_PATH },
      { element: <Dwindle />, path: DWINDLE_PATH },
      { element: <GGJ />, path: GGJ_PATH },
      { element: <PM />, path: PM_PATH },
      { element: <WSID />, path: WSID_PATH },
    ],
    element: <App />,
    errorElement: <Navigate to={HOME_PATH} replace />,
    path: HOME_PATH,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
