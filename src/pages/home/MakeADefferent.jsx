import { NavLink } from "react-router-dom";

function MakeADefferent() {
  return (
    <section className="bg-myPrimary text-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        <h2 className="md:text-4xl text-2xl font-bold mb-4 dark:text-gray-900">
          Make a Difference Today!
        </h2>
        <p className="text-lg mb-6 sm:w-8/12 mx-auto dark:text-gray-800">
          Your contribution can bring warmth and hope to someone in need. Join
          our mission and help make this winter easier for the less fortunate.
        </p>
        <NavLink
          to={"donationCampaigns"}
          className="bg-white text-myPrimary font-bold py-3 px-8 hover:bg-gray-100 active:scale-95 rounded-sm  transition"
        >
          Donate Now
        </NavLink>
      </div>
    </section>
  );
}

export default MakeADefferent;
