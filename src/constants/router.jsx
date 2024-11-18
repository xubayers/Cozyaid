import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import DonationCampaigns from "../pages/campaign/DonationCampaigns";
import Details from "../pages/details/Details";

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
