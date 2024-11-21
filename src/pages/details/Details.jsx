import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import DonatesForm from "./DonatesForm";
import { IoArrowBack } from "react-icons/io5";

function Details() {
  const data = useLoaderData();
  const params = useParams();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  const campaign = data.find(
    (campaignData) => campaignData.id === params.campaignId
  );
  return (
    <div className="container mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="col-span-1 lg:col-span-3 bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl">
        <button
          className="text-2xl mb-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition"
          onClick={handleNavigate}
        >
          <IoArrowBack />
        </button>

        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full lg:h-[450px] md:h-96 h-56 object-cover object-center rounded-md shadow-sm"
        />

        <h2 className="md:text-3xl text-2xl font-bold text-gray-800 dark:text-gray-200 my-4">
          {campaign.title}
        </h2>

        <p className="text-gray-700 dark:text-gray-400 text-base leading-relaxed mb-6 border-l-4 border-myPrimary pl-4">
          {campaign.description}
        </p>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-inner space-y-3">
          <p className="flex items-center text-sm">
            <span className="font-semibold text-gray-700 dark:text-gray-300 mr-2">
              Division:
            </span>
            <span className="text-gray-800 dark:text-gray-400">
              {campaign.division}
            </span>
          </p>
          <p className="flex items-center text-sm">
            <span className="font-semibold text-gray-700 dark:text-gray-300 mr-2">
              Contact Info:
            </span>
            <span className="text-gray-800 dark:text-gray-400">
              {campaign.contactInfo}
            </span>
          </p>
          <p className="flex items-center text-sm">
            <span className="font-semibold text-gray-700 dark:text-gray-300 mr-2">
              Status:
            </span>
            <span
              className={`font-semibold ${
                campaign.status === "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {campaign.status}
            </span>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-1 lg:col-span-2">
        <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl">
          <DonatesForm />
        </div>
      </div>
    </div>
  );
}

export default Details;
