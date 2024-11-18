import { useLoaderData } from "react-router-dom";
import CampaignCards from "./campaignCards";
import PageHeader from "../../components/pageHeader/PageHeader";

function DonationCampaigns() {
  const data = useLoaderData();
  return (
    <section className=" container mx-auto px-2">
      <div className="border-b ">
        <PageHeader
          title={"Donation Campaigns"}
          desc={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quas voluptate recusandae debitis excepturi exercitationem nostrum aspernatur."
          }
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-7">
        {data.map((campaign) => {
          return <CampaignCards key={campaign.id} campaign={campaign} />;
        })}
      </div>
    </section>
  );
}

export default DonationCampaigns;
