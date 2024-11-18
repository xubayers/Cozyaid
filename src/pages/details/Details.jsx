import { useLoaderData, useParams } from "react-router-dom";
import DonatesForm from "./DonatesForm";

function Details() {
  const data = useLoaderData();
  const params = useParams();
  const campaign = data.find(
    (campaignData) => campaignData.id === params.campaignId
  );
  return (
    <div className="container mx-auto px-2 mt-5 md:max-w-[800px] max-w-[600px]">
      <div>
        <h2 className="text-4xl  font-semibold text-gray-800 mb-2">
          {campaign.title}
        </h2>
        <p className="text-gray-600 text-sm mb-4">{campaign.description}</p>
        <p className="text-sm my-1">
          <span className="font-bold text-gray-700">Division: </span>
          <span className="text-gray-800">{campaign.division}</span>
        </p>
        <p className="text-sm mb-1">
          <span className="font-bold text-gray-700">Contact Info: </span>
          <span className="text-gray-800 ">{campaign.contactInfo}</span>
        </p>
        <p className="text-sm mb-5">
          <span className="font-bold text-gray-700">Status: </span>
          <span className="font-bold text-green-500">{campaign.status}</span>
        </p>

        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full lg:h-[450px] md:h-96 h-56 object-cover object-center"
        />
        <div className="p-4"></div>
      </div>
      <DonatesForm />
    </div>
  );
}

export default Details;
