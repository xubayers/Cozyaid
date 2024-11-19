import { useState } from "react";
import toast from "react-hot-toast";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { updateProfile, getAuth } from "firebase/auth";
import { app } from "../firebase.config";
import { FaGoogle } from "react-icons/fa";

const auth = getAuth(app);

export default function SignUp() {
  const [isVisible, setIsVisible] = useState(false);
  const { createNewUser, signWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const passVisiblityHandler = () => {
    setIsVisible((prev) => !prev);
  };

  // sing up user with google

  const googleSigninHandler = () => {
    signWithGoogle()
      .then(() => {
        toast.success("Sing up Successfully");
        navigate("/");
      })
      .catch(() => toast.error("Sing up Failed!"));
  };
  // create user
  const createNewUserHandler = (e) => {
    e.preventDefault();
    const target = e.target;

    const displayName = target.name.value;
    // const
    const email = target.email.value;
    const password = target.password.value;

    const validate = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!validate.test(password)) {
      setErr(
        "the password must be an upppercase a lowercase letter and minimum 6 character"
      );
      return;
    } else {
      setErr("");
    }
    createNewUser(email, password)
      .then(() => {
        return updateProfile(auth.currentUser, { displayName });
      })
      .catch((err) => {
        toast.error("Sing Up Failed!");
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create New Account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="my-2">
            <button
              className=" mx-auto border px-4 py-2 rounded-md flex justify-center items-center gap-2 bg-myPrimary text-white"
              onClick={googleSigninHandler}
            >
              Continue With <FaGoogle />
            </button>
          </div>
          <form className="space-y-6" onSubmit={createNewUserHandler}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                FullName
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="name"
                  className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="url"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Photo URL
              </label>
              <div className="mt-2">
                <input
                  id="url"
                  name="url"
                  type="text"
                  required
                  placeholder="photo url"
                  className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={isVisible ? "text" : "password"}
                  placeholder="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
                <button
                  className="text-xl absolute top-3 right-3"
                  onClick={passVisiblityHandler}
                >
                  {isVisible ? <IoMdEyeOff /> : <IoMdEye />}
                </button>
              </div>
              <p className="text-xs text-error my-2"> {err && err} </p>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            already have an account
            <Link to={"signup"}>
              {" "}
              <span className="font-body text-blue-700">Sign_In</span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
