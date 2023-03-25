import React, { useState } from "react";
import { Container } from "react-bootstrap";
import page_logo from "../assets/images/svg/page_logo.svg";
import cross from "../assets/images/svg/cross.svg";
const MyNav = () => {
  const [first, setfirst] = useState(true);
  return (
    <nav>
      <Container>
        <div className="d-flex justify-content-between pt-4">
          <ul className=" ps-0">
            <li>
              <a href="#">
                <img src={page_logo} alt="page_logo" />
              </a>
            </li>
          </ul>
          <ul
            className={
              first
                ? "d-flex flex-column flex-lg-row mobile_ul m-0 p-0 hide  gap-5 gap-lg-0"
                : "d-flex flex-column flex-lg-row mobile_ul m-0 p-0 show position-realtive gap-5 gap-lg-0"
            }
          >
            <li className="mx-4">
              <a href="#" className=" ff_raleway fw_500 fs_xsm clr_bluestone">
                Home
              </a>
            </li>
            <li className="mx-4">
              <a href="#" className=" ff_raleway fw_500 fs_xsm clr_bluestone">
                About Us
              </a>
            </li>
            <li className="mx-4">
              <a href="#" className=" ff_raleway fw_500 fs_xsm clr_bluestone">
                Services
              </a>
            </li>
            <li className="mx-4">
              <a href="#" className=" ff_raleway fw_500 fs_xsm clr_bluestone">
                Premium
              </a>
            </li>
            <div
              className=" d-lg-none position-absolute cross_position "
              onClick={() => {
                setfirst(true);
              }}
            >
              <img src={cross} className="" alt=" cross" />
            </div>
          </ul>

          <div
            onClick={() => {
              setfirst(false);
            }}
            className="menuicon d-lg-none"
          >
            {" "}
            <div
              className="line "
              onClick={() => {
                setfirst(false);
              }}
            ></div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default MyNav;
