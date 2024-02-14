import { useState } from "react";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";

import profile from "../../imgs/profile.png";
import "./navbarStyle.css";

export default function Navbar() {
  const [showNav, setShowNav] = useState("");

  const handleShowNav = () =>
    showNav === "" ? setShowNav("show") : setShowNav("");

  return (
    <div className="container mx-auto my-3">
      <nav className="navbar navbar-expand-md mx-h-70px row">
        <div className="col-5 col-sm-3 col-lg-2">
          <div className="logo-container">
            <div className="logo-bg"></div>
          </div>
        </div>

        <div className="col-7 col-sm-9 col-lg-10">
          <div className="w-100 py-3 py-md-0 rounded-12 text-end">
            <button
              className="navbar-toggler text-white second-bg-color py-2 px-3"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleShowNav}
            >
              {showNav === "show" ? <ImCancelCircle /> : <RiMenu3Fill />}
            </button>
          </div>
          <div
            className={`collapse navbar-collapse second-bg-color rounded-12 px-3 py-3 py-md-1  ${showNav}`}
            id="navbarNavDropdown"
          >
            <div className="navbar-nav row w-100 align-items-center mx-auto">
              <div className="col-12 col-md-4 position-relative text-center">
                <label
                  htmlFor="nav-search"
                  className="text-dark position-absolute"
                >
                  <IoIosSearch />
                </label>
                <input
                  id="nav-search"
                  className="rounded-15 border-0 outer-line-none pe-3 ps-4-5 py-2-5 w-100"
                  type="text"
                  placeholder="search"
                />
              </div>
              <div className="col-12 col-md-8 d-flex align-items-center justify-content-center justify-content-md-end">
                <div className="row align-items-center">
                  <div className="col-12 col-md-2 text-center my-2">
                    <div className="text-main me-3 fs-5">
                      <span className=" position-relative">
                        <span className="position-absolute top-0 badge rounded-pill bg-success fs-9">
                          6
                        </span>
                      </span>

                      <FaBell />
                    </div>
                  </div>

                  <div className="col-12 col-md-10">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="profile-img-container me-3 my-2">
                        <img className="w-100" src={profile} alt="profile" />
                      </div>
                      <div className="me-2">
                        <div className="text-sim-dark fs-13">Moni Roy</div>
                        <div className="text-sim-dark fs-11">Admin</div>
                      </div>
                      <div className="border border-1 rounded-circle fs-9 profile-arrow text-sim-dark">
                        <IoIosArrowDown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
