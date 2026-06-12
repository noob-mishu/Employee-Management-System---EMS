import { useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";

const LoginForm = () => {

  const [isActive, setIsActive] = useState(false);

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff]">

      <div
        className="
          relative
          overflow-hidden
          bg-white
          rounded-[30px]
          shadow-[0_5px_15px_rgba(0,0,0,0.35)]
          w-[768px]
          max-w-full
          min-h-[500px]
        "
      >

        {/* SIGN UP FORM */}

        <div
          className={`
            absolute
            top-0
            left-0
            w-1/2
            h-full
            transition-all
            duration-700
            ease-in-out

            ${
              isActive
                ? "translate-x-full opacity-100 z-[5]"
                : "opacity-0 z-[1]"
            }
          `}
        >

          <form className="bg-white flex flex-col items-center justify-center h-full px-10">

            <h1 className="text-4xl font-bold mb-5">
              Create Account
            </h1>

            <div className="flex gap-3 mb-4">

              <a
                href="#"
                className="
                  w-10 h-10
                  border border-gray-300
                  rounded-lg
                  flex items-center justify-center
                "
              >
                <FaGooglePlusG />
              </a>

              <a
                href="#"
                className="
                  w-10 h-10
                  border border-gray-300
                  rounded-lg
                  flex items-center justify-center
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="
                  w-10 h-10
                  border border-gray-300
                  rounded-lg
                  flex items-center justify-center
                "
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="
                  w-10 h-10
                  border border-gray-300
                  rounded-lg
                  flex items-center justify-center
                "
              >
                <FaLinkedinIn />
              </a>

            </div>

            <span className="text-xs text-gray-500 mb-4">
              or use your email for registration
            </span>

            <input
              type="text"
              placeholder="Name"
              className="
                w-full
                bg-gray-100
                px-4
                py-3
                rounded-lg
                outline-none
                mb-3
              "
            />

            <input
              type="email"
              placeholder="Email"
              className="
                w-full
                bg-gray-100
                px-4
                py-3
                rounded-lg
                outline-none
                mb-3
              "
            />

            <input
              type="password"
              placeholder="Password"
              className="
                w-full
                bg-gray-100
                px-4
                py-3
                rounded-lg
                outline-none
                mb-3
              "
            />

            <button
              type="submit"
              className="
                mt-4
                bg-violet-700
                text-white
                px-12
                py-3
                rounded-lg
                uppercase
                font-semibold
                text-sm
                cursor-pointer
                hover:bg-violet-500
                transition-all
                duration-300
              "
            >
              Sign Up
            </button>

          </form>

        </div>

        {/* SIGN IN FORM */}

        <div
          className={`
            absolute
            top-0
            left-0
            w-1/2
            h-full
            z-[2]
            transition-all
            duration-700
            ease-in-out

            ${isActive ? "translate-x-full opacity-0" : ""}
          `}
        >

          <form className="bg-white flex flex-col items-center justify-center h-full px-10">

            <h1 className="text-4xl font-bold mb-5">
              Sign In
            </h1>

            <div className="flex gap-3 mb-4">

              <a
                href="#"
                className="
                  w-10 h-10
                  border border-gray-300
                  rounded-lg
                  flex items-center justify-center
                "
              >
                <FaGooglePlusG />
              </a>

              <a
                href="#"
                className="
                  w-10 h-10
                  border border-gray-300
                  rounded-lg
                  flex items-center justify-center
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="
                  w-10 h-10
                  border border-gray-300
                  rounded-lg
                  flex items-center justify-center
                "
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="
                  w-10 h-10
                  border border-gray-300
                  rounded-lg
                  flex items-center justify-center
                "
              >
                <FaLinkedinIn />
              </a>

            </div>

            <span className="text-xs text-gray-500 mb-4">
              or use your email password
            </span>

            <input
              type="email"
              placeholder="Email"
              className="
                w-full
                bg-gray-100
                px-4
                py-3
                rounded-lg
                outline-none
                mb-3
              "
            />

            <input
              type="password"
              placeholder="Password"
              className="
                w-full
                bg-gray-100
                px-4
                py-3
                rounded-lg
                outline-none
                mb-3
              "
            />

            <button
              type="submit"
              className="
                mt-4
                bg-violet-700
                text-white
                px-12
                py-3
                rounded-lg
                uppercase
                font-semibold
                text-sm
                cursor-pointer
                hover:bg-violet-500
                transition-all
                duration-300
              "
            >
              Sign In
            </button>

          </form>

        </div>

        {/* TOGGLE CONTAINER */}

        <div
          className={`
            absolute
            top-0
            left-1/2
            w-1/2
            h-full
            overflow-hidden
            transition-all
            duration-700
            ease-in-out
            z-[1000]

            ${
              isActive
                ? "-translate-x-full rounded-r-[150px]"
                : "rounded-l-[150px]"
            }
          `}
        >

          <div
            className={`
              bg-gradient-to-r
              from-[#5c6bc0]
              to-[#512da8]

              text-white
              relative
              left-[-100%]
              h-full
              w-[200%]

              transition-all
              duration-700
              ease-in-out

              ${isActive ? "translate-x-1/2" : "translate-x-0"}
            `}
          >

            {/* LEFT PANEL */}

            <div
              className={`
                absolute
                w-1/2
                h-full
                flex
                flex-col
                items-center
                justify-center
                px-8
                text-center
                top-0
                transition-all
                duration-700
                ease-in-out

                ${
                  isActive
                    ? "translate-x-0"
                    : "-translate-x-[200%]"
                }
              `}
            >

              <h1 className="text-4xl font-bold mb-5">
                Welcome Back!
              </h1>

              <p className="text-sm leading-6 mb-8">
                Enter your personal details
                to use all site features
              </p>

              <button
                type="button"
                onClick={() => setIsActive(false)}
                className="
                  border
                  border-white
                  text-white
                  px-12
                  py-2
                  rounded-lg
                  uppercase
                  font-semibold
                  text-sm
                  hover:bg-white
                  hover:text-violet-700
                  transition-all
                  duration-300
                "
              >
                Sign In
              </button>

            </div>

            {/* RIGHT PANEL */}

            <div
              className={`
                absolute
                right-0
                w-1/2
                h-full
                flex
                flex-col
                items-center
                justify-center
                px-8
                text-center
                top-0
                transition-all
                duration-700
                ease-in-out

                ${
                  isActive
                    ? "translate-x-[200%]"
                    : "translate-x-0"
                }
              `}
            >

              <h1 className="text-4xl font-bold mb-5">
                Hello, Sir!
              </h1>

              <p className="text-sm leading-6 mb-8">
                Register with your personal details
                to use all site features
              </p>

              <button
                type="button"
                onClick={() => setIsActive(true)}
                className="
                  border
                  border-white
                  text-white
                  px-12
                  py-2
                  rounded-lg
                  uppercase
                  font-semibold
                  text-sm
                  hover:bg-white
                  hover:text-violet-700
                  transition-all
                  duration-300
                "
              >
                Sign Up
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LoginForm;