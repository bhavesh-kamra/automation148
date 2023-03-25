import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footer_left_arrow from "../assets/images/svg/footer_left_arrow.svg";
import footer_right_arrow from "../assets/images/svg/footer_right_arrow.svg";
import leftarrow_blue_base from "../assets/images/svg/leftarrow_blue_base.svg";
import rightarrow_blue_base from "../assets/images/svg/rightarrow_blue_base.svg";
import clock from "../assets/images/svg/clock.svg";
import group from "../assets/images/svg/group.svg";
import invoices from "../assets/images/svg/invoices.svg";


const MyFooter = () => {
  return (
    <section className=" ">
      <Container>
        <div className=" bg_blue rounded-4 text-center   py-5 my-5">
          <Row className=" justify-content-evenly align-items-center">
            <Col lg={3}>
              <div className=" d-flex align-items-end  justify-content-center">
                <div className=" position-relative">
                  <p className="fs_9xl clr_white  ff_inter mb-0 fw_700">8</p>
                  <div className="blue_path position-absolute blue_path_pos"></div>
                </div>
                <p className="fs_3xl clr_white ff_inter z_1 mb-lg-4 fw_700">MONTHS</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className=" d-flex  justify-content-center">
                <img
                  className=" me-5"
                  src={leftarrow_blue_base}
                  alt="leftarrow"
                />
                <div className=" d-block flex-column">
                  <p className="ff_inter fw_700 fs_2xl mb-0 clr_white">
                    Duration
                  </p>
                  <img src={clock} alt="invoices" />
                </div>
                <img
                  className=" ms-5"
                  src={rightarrow_blue_base}
                  alt="rightarrow"
                />
              </div>
            </Col>
            <Col lg={3}>
              <div className=" d-flex align-items-end justify-content-center">
                <div className=" position-relative">
                  <p className="fs_9xl clr_white  ff_inter mb-0 fw_700">4</p>
                  <div className="blue_path position-absolute blue_path_pos"></div>
                </div>
                <p className="fs_3xl clr_white ff_inter z_1 mb-3 fw_700">
                  MONTHS REMAINING
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="second_box rounded-4 text-center align-items-center py-5">
          <Row className=" justify-content-center">
            <Col lg={3}>
              <p className=" fs_4xl ff_inter clr_blue fw_700  mb-4 mb-lg-0">
                42K
              </p>
            </Col>

            <Col lg={3}>
              <div className=" d-flex justify-content-center">
                <img
                  className=" me-5"
                  src={footer_left_arrow}
                  alt="leftarrow"
                />
                <div className=" d-block flex-column">
                  <p className="ff_inter fw_700 fs_2xl mb-0 clr_blue">
                    Invoices
                  </p>
                  <img src={invoices} alt="invoices" />
                </div>
                <img
                  className=" ms-5"
                  src={footer_right_arrow}
                  alt="rightarrow"
                />
              </div>
            </Col>
            <Col lg={3}>
              {" "}
              <p className=" mb-0 fs_4xl ff_inter clr_yellow fw_700 mt-4 mt-lg-0">
                21K{" "}
              </p>
            </Col>
          </Row>
        </div>
        <div className=" bg_blue rounded-4 text-center   py-5 my-5">
          <Row className=" justify-content-center align-items-center">
            <Col lg={3}>
              <div className=" d-flex flex-column mb-3 mb-lg-0">
                <p className=" fs_4xl ff_inter clr_blue fw_700  clr_white mb-0">
                  95
                </p>
                <p className=" fw_700 fs_xsm clr_white">MAN DAYS</p>
              </div>
            </Col>

            <Col lg={3}>
              <div className=" d-flex  justify-content-center">
                <img
                  className=" me-5"
                  src={leftarrow_blue_base}
                  alt="leftarrow"
                />
                <div className=" d-block flex-column">
                  <p className="ff_inter fw_700 fs_2xl mb-0 clr_white">
                    Effort
                  </p>
                  <img src={group} alt="invoices" />
                </div>
                <img
                  className=" ms-5"
                  src={rightarrow_blue_base}
                  alt="rightarrow"
                />
              </div>
            </Col>
            <Col lg={3}>
              <div className=" d-flex flex-column mt-3 mt-lg-0">
                <p className=" fs_4xl ff_inter clr_yellow fw_700  mb-0 ">
                  14.25
                </p>
                <p className=" fw_700 fs_xsm clr_white">MAN DAYS</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default MyFooter;
