import React from 'react';
import { Link } from "react-router-dom";

function Farmernav() {
    return (
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "rgba(0, 60, 0, 0.8)" }}
      >
        <div className="container-fluid">
          <h4 className="navbar-brand font-bold ms-5 text-8xl fs-3 font-serif">
            ShreeAnna.com
          </h4>
        </div>
        <form className="d-flex" role="search">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-items text-decoration-none me-5">
              <Link
                to={"/Aboutus"}
                className="text-decoration-none text-black fs-6 font-bold font-roboto"
              >
                Marketplace
              </Link>
            </li>
            <li className="nav-items text-decoration-none me-5">
              <Link
                to={"/Aboutus"}
                className="text-decoration-none text-black fs-6 font-bold font-roboto"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-items text-decoration-none me-5">
              <Link
                to={"/Aboutus"}
                className="text-decoration-none text-black fs-6 font-bold font-roboto"
              >
                Aboutus
              </Link>
            </li>
            <li className=" nav-items me-5">
              <Link
                to={"/Signup"}
                className="text-decoration-none text-black fs-6 font-bold font-roboto"
              >
                SignUp
              </Link>
            </li>
          </ul>
        </form>
      </nav>
    );
}

export default Farmernav;