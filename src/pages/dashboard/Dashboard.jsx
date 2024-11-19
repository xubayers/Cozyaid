import { CiEdit } from "react-icons/ci";
import { useAuth } from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";

function Dashboard() {
  const { user, setUser, signoutUser } = useAuth();

  const signOutHandler = () => {
    signoutUser();
    setUser(null);
  };
  return (
    <div className="container mx-auto px-2 mt-7">
      <h1 className="text-3xl ">
        Welcome &nbsp;
        <span className="font-semibold text-myPrimary">
          {user.displayName.split(" ")[0]},
        </span>
      </h1>
      <div className="mt-8 ">
        <div className="flex gap-7 border shadow-sm p-5 rounded-sm">
          <img
            src={user?.photoURL}
            alt="profile photo"
            className="h-44 ring-8 ring-myPrimary mb-4 aspect-square rounded-full object-cover"
          />
          <div className="flex flex-col justify-between  w-full">
            <div>
              {" "}
              <h2 className="text-lg">Name: {user?.displayName}</h2>
              <p className="text-lg my-1">Email: {user.email}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="flex gap-2  rounded-sm  px-3 py-2 items-center font-semibold text-white bg-orange-600 mr-3  active:scale-95 transition-all"
              >
                Logout
              </button>
              <NavLink
                to={"/update-profile"}
                className="flex gap-2 border-2 border-orange-600 rounded-sm  px-3 py-2 items-center font-semibold hover:text-white hover:bg-orange-600"
              >
                Update Profile <CiEdit />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box bg-orange-300">
          <h3 className="font-bold text-2xl">Logout Account</h3>
          <p className="py-4">
            If you <span className="font-semibold">confirm</span> this you will
            have again login your account
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={signOutHandler}
                className="px-3 py-2 rounded-sm text-white capitalize bg-myPrimary"
              >
                confirm
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Dashboard;
