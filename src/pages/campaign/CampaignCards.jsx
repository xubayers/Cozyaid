import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function CampaignCards({ campaign = {} }) {
  return (
    <div
      className={`max-w-sm mx-auto border border-gray-300 rounded-sm shadow-sm overflow-hidden  `}
    >
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 ">
          {campaign.title}
        </h2>
        <p className="text-gray-600 text-sm mb-4 ">
          {campaign.description.slice(0, 90)}...
        </p>
        <p className="text-sm">
          <span className="font-bold text-gray-700 ">Division: </span>
          <span className="text-gray-800">{campaign.division}</span>
        </p>
        <div className="flex justify-center mt-4 ">
          <NavLink to={`/details/${campaign.id}`} className={"w-full"}>
            <button className="border my-2 w-full border-myPrimary hover:bg-myPrimary text-myPrimary hover:text-white font-semibold px-3 py-2 rounded-sm">
              Donate Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CampaignCards;
