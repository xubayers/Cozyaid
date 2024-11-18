import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import DonationCampaigns from "../pages/campaign/DonationCampaigns";
import Details from "../pages/details/Details";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../firebase/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        element: <AuthLayout />,
        children: [
          {
            path: "signin",
            element: <SignIn />,
          },
        ],
      },

      // utiss
      {
        path: "/details/:campaignId",
        element: <Details />,
        loader: () => fetch("../campaigns.json"),
      },
    ],
  },
]);

export { router };
