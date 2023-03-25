import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import laptop from '../assets/images/png/laptop.png'
import header_bg from '../assets/images/png/header_bg.png'

const MyHeader = () => {
  return (
    <section className=" position-relative">
      <img className="wave w-100" src={header_bg} alt="" />
      <Container className=" pb-lg-5 mb-lg-5">
        <Row className=" flex-column-reverse flex-lg-row z-1 pb-5 mb-lg-5 ">
          <Col lg={6} className=" pt-lg-5">
            <div className="pt-5 text-center text-lg-start">
              <p className=" ff_inter fw_300 clr_blue fs_4xl">
                Increased Efficiency
              </p>
              <h1 className=" ff_inter fw_700 clr_blue fs_7xl">
                Through Automation
              </h1>
              <p className=" ff_inter fw_400 fs_md  clr_black ">
                We have{" "}
                <span className=" fw_700">automated invoice distribution</span>{" "}
                from as our automation initiatives.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <img className="w-100" src={laptop} alt="computer" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyHeader;
