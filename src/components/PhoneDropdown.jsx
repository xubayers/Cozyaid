import { RiMenu4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function PhoneDropdown() {
  return (
    <details className="relative">
      <summary className="list-none btn btn-ghost md:hidden">
        <h2 className="text-lg font-bold">
          <RiMenu4Line />
        </h2>
      </summary>

      <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-4 shadow space-y-3 absolute top-8 left-2 z-[99999] ">
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return `${
              isActive ? "text-myPrimary font-semibold" : "hover:text-myPrimary"
            } `;
          }}
        >
          Home
        </NavLink>

        <NavLink
          to={"donationCampaigns"}
          className={({ isActive }) => {
            return `${
              isActive ? "text-myPrimary font-semibold" : "hover:text-myPrimary"
            } `;
          }}
        >
          Donation Campaigns
        </NavLink>

        <NavLink
          to={"howtohelp"}
          className={({ isActive }) => {
            return `${
              isActive ? "text-myPrimary font-semibold" : "hover:text-myPrimary"
            } `;
          }}
        >
          How to Help
        </NavLink>

        <NavLink
          to={"dashboard"}
          className={({ isActive }) => {
            return `${
              isActive ? "text-myPrimary font-semibold" : "hover:text-myPrimary"
            } `;
          }}
        >
          Dashboard
        </NavLink>
      </ul>
    </details>
  );
}

export default PhoneDropdown;
