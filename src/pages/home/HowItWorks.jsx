import { FaDonate, FaMapMarkerAlt, FaHandsHelping } from "react-icons/fa";

const HowItWorks = () => {
  // Steps Data
  const steps = [
    {
      icon: <FaDonate className="text-blue-500 text-5xl mx-auto mb-4" />,
      title: "Make a Donation",
      description:
        "Choose a campaign, specify the clothing quantity, and make your donation online with ease.",
    },
    {
      icon: <FaMapMarkerAlt className="text-green-500 text-5xl mx-auto mb-4" />,
      title: "Collection Points",
      description:
        "Drop off your donations at our collection points or schedule a pickup from your location.",
    },
    {
      icon: (
        <FaHandsHelping className="text-yellow-500 text-5xl mx-auto mb-4" />
      ),
      title: "We Deliver",
      description:
        "Our team ensures your donations are distributed to supported divisions across the country.",
    },
  ];

  // Supported Divisions Data
  const divisions = [
    "Dhaka",
    "Chattogram",
    "Khulna",
    "Sylhet",
    "Rajshahi",
    "Barishal",
    "Mymensingh",
    "Rangpur",
  ];

  return (
    <section className="py-12 mt-8 bg-myPrimary/5 rounded-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          <span className="text-myPrimary">How It</span> Works
        </h2>

        {/* Steps Section */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
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
            {divisions.map((division, index) => (
              <li
                key={index}
                className="bg-mySecondery/15 px-4 py-2 rounded-md shadow-sm"
              >
                {division}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
