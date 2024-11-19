import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import DonationCampaigns from "../pages/campaign/DonationCampaigns";
import Details from "../pages/details/Details";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../firebase/signin/SignIn";
import SignUp from "../firebase/signup/SignUp";
import PrivetRoute from "../privetRoutes/PrivetRoute";
import AuthenteAccess from "../privetRoutes/AuthenteAccess";
import ErrrPage from "../Err/ErrrPage";
import Dashboard from "../pages/dashboard/Dashboard";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import ForgetPassword from "../firebase/forgetPassword/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrrPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "donationCampaigns",
        element: <DonationCampaigns />,
        loader: () => fetch("../campaigns.json"),
      },
      {
        path: "authlayout",
        element: (
          <AuthenteAccess>
            <AuthLayout />
          </AuthenteAccess>
        ),
        children: [
          {
            path: "signin",
            element: <SignIn />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
          {
            path: "forgetPassword",
            element: <ForgetPassword />,
          },
        ],
      },
      {
        path: "dashboard",
        element: (
          <PrivetRoute>
            <Dashboard />
          </PrivetRoute>
        ),
      },

      // utiss
      {
        path: "/details/:campaignId",
        element: (
          <PrivetRoute>
            <Details />
          </PrivetRoute>
        ),
        loader: () => fetch("../campaigns.json"),
      },
      {
        path: "update-profile",
        element: (
          <PrivetRoute>
            <UpdateProfile />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export { router };
