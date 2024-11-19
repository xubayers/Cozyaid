import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

function UpdateProfile() {
  const { updateUserProfile, user } = useAuth();
  const navigate = useNavigate();
  const updateProfileHandler = (e) => {
    e.preventDefault();
    const target = e.target;

    const fullname = target.name.value ? target.name.value : user?.displyName;
    const photoUrl = target.photoUrl.value
      ? target.photoUrl.value
      : user?.photoURL;

    updateUserProfile(fullname, photoUrl)
      .then(() => {
        console.log("success");
        navigate(-1);
        toast.success("Profile updated");
      })
      .catch(() => {
        console.log("err");
      });
  };
  return (
    <div className="container mx-auto px-2">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Update Profile
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={updateProfileHandler}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Your Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Fullname"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="photoUrl"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Photo URL
              </label>
              <div className="mt-2">
                <input
                  id="photoUrl"
                  name="photoUrl"
                  type="photoUrl"
                  placeholder="Photo URL"
                  autoComplete="photoUrl"
                  className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
