import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

function Login() {
  return (
    <>
      <div className="p-0">
        {/* Navbar */}
        <nav className="fixed top-0 w-full flex justify-center items-center h-16 bg-olive-500">
          <div className="flex justify-center font-serif">
            <h2>ShreeAnna.com</h2>
          </div>
        </nav>

        <div className="pt-20">
          {/* Heading */}
          <div className="m-2 p-2">
            <h4 className="flex justify-center font-serif">Welcome Back;)</h4>
            <p className="flex justify-center text-gray-600 font-roboto-slab">
              Login to your account
            </p>
          </div>

          {/* Form Card */}
          <div className="flex justify-center m-2 p-2">
            <div className="border-2 border-black h-3/4 w-3/12 bg-olive-100 rounded-lg">
              <form>
                {/* Email */}
                <div className="flex flex-col m-2 p-2">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="youremail@.com"
                    required
                    className="border-2 border-black rounded-md h-10 focus:ring-2 focus:ring-green-600"
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col m-2 p-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="pass"
                    placeholder="**********"
                    required
                    className="border-2 border-black rounded-md h-10 focus:ring-2 focus:ring-green-600"
                  />
                </div>

                {/* Button */}
                <div className="flex justify-center m-2 p-1">
                  <button className="bg-green-800 text-white px-4 py-2 rounded">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Link */}
          <p className="flex justify-center m-2 p-2 text-gray-500">
            Don't have an account?
            <Link to={"/Signup"} className="no-underline text-black ml-1">
              Signup
            </Link>
          </p>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Login;
