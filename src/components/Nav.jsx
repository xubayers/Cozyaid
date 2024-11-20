import { RiMenu4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Nav() {
  const { user = {} } = useAuth();
  return (
    <div className="navbar bg-base-100 container mx-auto animate__animated animate__fadeInDown">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <h2 className="text-lg font-bold">
              <RiMenu4Line />
            </h2>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow space-y-3"
          >
            <NavLink
              to={"/"}
              className={({ isActive }) => {
                `${isActive && "text-purple-600 font-semibold"}`;
              }}
            >
              Home
            </NavLink>
            <NavLink
              to={"donationCampaigns"}
              className={({ isActive }) => {
                `${isActive && "text-purple-600 font-semibold"}`;
              }}
            >
              Donation Campaigns
            </NavLink>

            <NavLink
              className={({ isActive }) => {
                `${isActive && "text-purple-600 font-semibold"}`;
              }}
            >
              How to Help
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                `${isActive && "text-purple-600 font-semibold"}`;
              }}
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <NavLink to={"/"} className="btn btn-ghost font-bold text-xl">
          CozyAid
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 *:px-3 gap-3 *:py-2 ">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return `${
                isActive
                  ? "text-myPrimary font-semibold"
                  : "hover:text-myPrimary"
              } `;
            }}
          >
            Home
          </NavLink>

          <NavLink
            to={"donationCampaigns"}
            className={({ isActive }) => {
              return `${
                isActive
                  ? "text-myPrimary font-semibold"
                  : "hover:text-myPrimary"
              } `;
            }}
          >
            Donation Campaigns
          </NavLink>

          <NavLink
            to={"howtohelp"}
            className={({ isActive }) => {
              return `${
                isActive
                  ? "text-myPrimary font-semibold"
                  : "hover:text-myPrimary"
              } `;
            }}
          >
            How to Help
          </NavLink>

          <NavLink
            to={"dashboard"}
            className={({ isActive }) => {
              return `${
                isActive
                  ? "text-myPrimary font-semibold"
                  : "hover:text-myPrimary"
              } `;
            }}
          >
            Dashboard
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <NavLink
            to={"authlayout/signin"}
            className="px-3 py-2  text-white hover:bg-mySecondery/90 bg-mySecondery rounded-sm"
          >
            Login
          </NavLink>
        ) : (
          <NavLink
            to={"/dashboard"}
            className={
              " ring-4 ring-orange-600 rounded-full h-10 aspect-square "
            }
          >
            <img
              src={user?.photoURL}
              className="h-full rounded-full w-full"
              alt="Avtr "
            />
          </NavLink>
        )}
      </div>
    </div>
  );
}
export default Nav;
