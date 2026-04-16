import React from 'react';
import Aboutus from './Aboutus';
function Navbar() {
    return (
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand font-bold ms-5 text-8xl fs-3" href="#">
            ShreeAnna.com
          </a>
        </div>
        <form className="d-flex" role="search">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className=" nav-items me-5">
              <a
                href="#" className="text-decoration-none text-black fs-6 font-bold">
                SignUp
              </a>
            </li>
            <li className="nav-items text-decoration-none me-5">
              <a
                href="/Aboutus"
                className="text-decoration-none text-black fs-6 font-bold"
              >
                Aboutus
              </a>
            </li>
          </ul>
        </form>
      </nav>
    );
}

export default Navbar;