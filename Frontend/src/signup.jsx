import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

function Signup() {
  return (
    <>
      <div className="p-0">
        {/* Navbar */}
        <nav className="fixed top-0 w-full flex justify-center items-center h-16 bg-olive-500">
          <div className="flex justify-center font-serif">
            <h2>ShreeAnna.com</h2>
          </div>
        </nav>

        {/* Content */}
        <div className="pt-15">
          <div className="mt-0 m-2 p-2">
            <h4 className="flex justify-center font-serif">Create an Account</h4>
            <p className="flex justify-center text-gray-600 font-roboto-slab">
              Join the millet value chain
            </p>
          </div>

          {/* Form Card */}
          <div className="flex justify-center m-1 p-1">
            <div className="border-2 border-black h-3/4 w-3/12 bg-olive-100 rounded-lg">
              <p className="m-2 p-1">I am a,</p>

              <div className="flex justify-center m-2 p-2">
                <div className="border-2 border-black h-20 mr-1 rounded-md flex flex-col justify-center text-center w-1/2">
                  <div>
                    <i className="fa-solid fa-building-wheat text-xl text-amber-950"></i>
                  </div>
                  Farmer/FPO
                </div>

                <div className="border-2 border-black h-20 ml-1 rounded-md flex flex-col justify-center text-center w-1/2">
                  <div>
                    <i className="fa-solid fa-cart-shopping text-xl text-amber-950"></i>
                  </div>
                  Buyer/Processor
                </div>
              </div>

              <form>
                <div className="flex flex-col m-2 p-2">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="Your full name"
                    required
                    className="border-2 border-black rounded-md h-10 focus:ring-2 focus:ring-green-600"
                  />
                </div>

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

                <div className="flex flex-col m-2 p-2">
                  <label htmlFor="location">Enter your Location</label>
                  <input
                    type="text"
                    id="location"
                    name="loc"
                    placeholder="City, State"
                    className="border-2 border-black rounded-md h-10 focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div className="flex justify-center m-2 p-1">
                  <button className="bg-green-800 text-white px-4 py-2 rounded">
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Login Link */}
          <p className="flex justify-center m-2 p-2 text-gray-500">
            Already have an account?
            <Link to={"/Login"} className="no-underline text-black ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;
