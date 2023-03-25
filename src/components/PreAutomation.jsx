import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Download from "../assets/images/png/sec2_img1.png";
import email from "../assets/images/png/sec2_img2.png";
import email2 from "../assets/images/png/sec2_img3.png";
import message from "../assets/images/png/sec2_img4.png";
import yellow_dots from "../assets/images/png/yellow_dots.png";
import yellow_right_arrow from "../assets/images/svg/yellow_right_arrow.svg";
import cross_yellow from "../assets/images/svg/cross_yellow.svg";
import globe from "../assets/images/svg/globe.svg";
const PreAutomation = () => {
  return (
    <section className="position-relative">
      <img
        className="position-absolute dots_2_position d-none d-md-block"
        src={yellow_dots}
        alt="dots_2"
      />

      <div className="sec_2_bg_img mt_2 pb-lg-5">
        <Container className="py-5 mb-lg-5 position-relative">
          <img
            className="cross_yellow_pos  position-absolute"
            src={cross_yellow}
            alt="crosss"
          />{" "}
          <img
            className=" right_globe_pos  position-absolute"
            src={globe}
            alt="globe"
          />
          <h2 className=" ff_inter fw_700 fs_5xl clr_blue text-center">
            Pre-Automation{" "}
          </h2>
          <p className="text-center pt-3 ff_inter fw_400 fs_md clr_black">
            <span className="fw_700"> Manually creating</span> and{" "}
            <span className="fw_700"> distributing invoices</span> -
            labor-intensive and prone to errors.
          </p>{" "}
        </Container>
      </div>
      <div>
        <Container>
          {" "}
          <Row className="pb-5">
            <Col
              lg={3}
              md={6}
              sm={10}
              className="position-relative m-auto  px-4"
            >
              <img
                className="start-0 z_n_1  position-absolute"
                src={globe}
                alt="globe"
              />
              <img
                className="position-absolute d-none d-lg-block aerow_position_1"
                src={yellow_right_arrow}
                alt="aerow_right"
              />
              <div className="boxes text-center">
                <img className="pt-5" src={Download} alt="box_1" />
                <p className="clr_light_black ff_inter fw_300 fs_xsm px-5 py-5">
                  Download invoices manually
                </p>
              </div>
            </Col>{" "}
            <Col
              lg={3}
              md={6}
              sm={10}
              className="position-relative m-auto  px-4"
            >
              <img
                className="position-absolute d-none d-lg-block aerow_position_2"
                src={yellow_right_arrow}
                alt="arrow_right"
              />
              <div className="boxes text-center">
                <img className="pt-5" src={email} alt="box_2" />
                <p className="clr_light_black ff_inter fw_300 fs_xsm px-5 py-5">
                  Download invoices manually
                </p>
              </div>
            </Col>{" "}
            <Col
              lg={3}
              md={6}
              sm={10}
              className="position-relative m-auto  px-4"
            >
              <img
                className="position-absolute d-none d-lg-block aerow_position_3"
                src={yellow_right_arrow}
                alt="arrow_right"
              />
              <div className="boxes text-center">
                <img className="pt-5" src={email2} alt="box_3" />
                <p className="clr_light_black ff_inter fw_300 fs_xsm px-5 py-5">
                  Download invoices manually
                </p>
              </div>
            </Col>{" "}
            <Col
              lg={3}
              md={6}
              sm={10}
              className="position-relative m-auto  px-4"
            >
              <div className="boxes text-center">
                <img className="pt-5" src={message} alt="box_4" />
                <p className="clr_light_black ff_inter fw_300 fs_xsm px-5 py-5">
                  Download invoices manually
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="blur_box"></div>
      </div>
    </section>
  );
};

export default PreAutomation;
