import { useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useEmail } from "../../hooks/useEmail";

export default function SignIn() {
  const [isVisible, setIsVisible] = useState(false);
  const { signWithGoogle, singInEmailPass } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { setEmail } = useEmail();
  const emailRef = useRef();
  const [err, setErr] = useState("");

  const passVisiblityHandler = () => {
    setIsVisible((prev) => !prev);
  };

  const googleSigninHandler = () => {
    signWithGoogle()
      .then(() => {
        toast.success("Sing in Successfully");
        console.log(location.state);
        if (location.state !== "/") {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch(() => toast.error("Sing in Failed!"));
  };

  const emailPasswordSignIn = (e) => {
    e.preventDefault();
    const target = e.target;

    const email = target.email;
    const password = target.password;
    singInEmailPass(email, password)
      .then(() => {
        if (location.state !== "/") {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error("Sing in Failed!");
        console.log(err);
      });
  };

  // forget password handler
  const forgetPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email) {
      setEmail(email);
      navigate("/authlayout/forgetPassword");
    } else {
      setErr("Plase enter a email!");
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
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
          <form className="space-y-6" onSubmit={emailPasswordSignIn}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  ref={emailRef}
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
              <p className="text-xs text-error mt-1"> {err && err} </p>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <button
                    onClick={forgetPasswordHandler}
                    className="hover:underline font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password
                  </button>
                </div>
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
                  type="button"
                  className="text-xl absolute top-3 right-3"
                  onClick={passVisiblityHandler}
                >
                  {isVisible ? <IoMdEyeOff /> : <IoMdEye />}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign In
              </button>
            </div>
          </form>

          <a className="mt-10 text-center text-sm/6 text-gray-500">
            create a new account
            <Link to={"/authlayout/signup"}>
              <span className="font-body text-blue-700 ml-2">Sign_Up</span>
            </Link>
          </a>
        </div>
      </div>
    </>
  );
}
