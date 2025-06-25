import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProtectedRoute from "../routes/ProtectedRoute";
import MarathonDetails from "../pages/MarathonDetails/MarathonDetails";
import MarathonRegistration from "../pages/MarathonRegistration/MarathonRegistration";
import Marathons from "../pages/Marathons/Marathons";
import DashBoardLayout from "../layouts/DashBoardLayout";
import AddMarathon from "../pages/AddMarathon/AddMarathon";
import MyMarathonList from "../pages/MyMarathonList/MyMarathonList";
import MyApplyList from "../pages/MyApplyList/MyApplyList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home, loader: () => fetch("/bannerData.json") },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      {
        path: "marathons",
        element: (
          <ProtectedRoute>
            <Marathons />
          </ProtectedRoute>
        ),
      },
      {
        path: "marathon/:id",
        element: (
          <ProtectedRoute>
            <MarathonDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/marathon-registration/:id",
        element: (
          <ProtectedRoute>
            <MarathonRegistration />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashBoardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, Component: Dashboard },
      {
        path: "add-marathon",
        Component: AddMarathon,
      },
      {
        path: "my-marathon-list",
        Component: MyMarathonList,
      },
      {
        path: "my-apply-list",
        Component: MyApplyList,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
