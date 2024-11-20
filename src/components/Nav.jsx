import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import PhoneDropdown from "./PhoneDropdown";
import ThemeControler from "./theme/ThemeControler";

function Nav() {
  const { user = {} } = useAuth();
  return (
    <div className="bg-gray-100/60">
      <div className="navbar  container mx-auto animate__animated animate__fadeInDown  mb-2">
        <div className="navbar-start">
          <PhoneDropdown />
          <NavLink to={"/"} className="btn btn-ghost font-bold text-xl">
            CozyAid
          </NavLink>
        </div>
        <div className="navbar-center hidden md:flex">
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
          {/* theme constroler */}
          <ThemeControler />
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
                " ring-4 ring-orange-600 rounded-full h-8 aspect-square "
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
    </div>
  );
}
export default Nav;
