import { FaDonate, FaMapMarkerAlt, FaHandsHelping } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className=" py-12 mt-8 bg-myPrimary/5 rounded-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          <span className="text-myPrimary">How It</span> Works
        </h2>

        {/* Instructions Section */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="text-blue-500 text-5xl flex justify-center  mx-auto mb-4">
              <FaDonate />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Make a Donation
            </h3>
            <p className="text-gray-600">
              Choose a campaign, specify the clothing quantity, and make your
              donation online with ease.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="text-green-500 text-5xl mx-auto mb-4 flex justify-center ">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Collection Points
            </h3>
            <p className="text-gray-600">
              Drop off your donations at our collection points or schedule a
              pickup from your location.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="text-yellow-500 text-5xl mx-auto mb-4 flex justify-center ">
              <FaHandsHelping />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              We Deliver
            </h3>
            <p className="text-gray-600">
              Our team ensures your donations are distributed to supported
              divisions across the country.
            </p>
          </div>
        </div>

        {/* Supported Divisions */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Supported Divisions
          </h3>
          <p className="text-gray-600 mb-4">
            Your donations reach people in these divisions:
          </p>
          <ul className="flex flex-wrap justify-center gap-4 text-gray-700">
            <li className="bg-mySecondery/15 px-4 py-2 rounded-md shadow-sm">
              Dhaka
            </li>
            <li className="bg-mySecondery/15 px-4 py-2 rounded-md shadow-sm">
              Chattogram
            </li>
            <li className="bg-mySecondery/15 px-4 py-2 rounded-md shadow-sm">
              Khulna
            </li>
            <li className="bg-mySecondery/15 px-4 py-2 rounded-md shadow-sm">
              Sylhet
            </li>
            <li className="bg-mySecondery/15 px-4 py-2 rounded-md shadow-sm">
              Rajshahi
            </li>
            <li className="bg-mySecondery/15 px-4 py-2 rounded-md shadow-sm">
              Barishal
            </li>
            <li className="bg-mySecondery/15 px-4 py-2 rounded-md shadow-sm">
              Mymensingh
            </li>
            <li className="bg-mySecondery/15 px-4 py-2 rounded-md shadow-sm">
              Rangpur
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
