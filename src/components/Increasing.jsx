import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import greenarrow from "../assets/images/png/greenarrow.png"
import sec4_img1 from "../assets/images/png/sec4_img1.png";
import sec4_img2 from "../assets/images/png/sec4_img2.png";
import sec4_yellowdots from "../assets/images/png/sec4_yellowdots.png";


const Increasing = () => {
  return (
    <section className=" py-lg-5 position-relative">
      <img
        src={sec4_yellowdots}
        alt="sec4_yellowdots"
        className="position-absolute end-0 top260"
      />
      <Container>
        <div className="text-center">
          <p className="ff_inter fw_700 fs_5xl clr_blue">
            Increasing process efficiency by
          </p>
          <div className="position-relative  d-inline-block">
            <span className="ff_inter fw_700 fs_8xl clr_green">4x</span>
            <img
              src={greenarrow}
              alt="greenarrow"
              className="position-absolute greenarrow_pos"
            />
          </div>
          <div className="position-relative my-5">
            <Row className="py-5 justify-content-between">
              <Col md={5} lg={6} className="cur_poi">
                <div className="opac_down_box rounded-4 py-4 c_pointer">
                  <p className="ff_inter fw_700 fs_lg clr_purple mb-0">
                    PRE-AUTOMATION
                  </p>
                </div>
                <img src={sec4_img1} alt="sec4_img1" className="mt-4 pt-3 w_100" />
                <p className="ff_inter fw_700 fs_xl clr_yellow mt-5">
                  With 100% manual process
                </p>
                <div className="small_line mx-auto mt-5"></div>
              </Col>

              <Col className="d-block d-md-none mt-4 mt-md-0">
                <div className="max_184 mx-auto">
                  <div className="white_circle p-3  position-absol ute start-50 translate-mid dle-x top-0 d-inline-block">
                    <div className="border_circular_yellow d-flex align-items-center justify-content-center">
                      <span className="ff_inter fw_700 fs_5xl clr_purple mb-0">
                        V
                      </span>
                      <span className="mt-3 ff_inter fw_700 fs_5xl clr_purple mb-0">
                        S
                      </span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={5} lg={6} className="mt-4 mt-md-0 cur_poi">
                <div className="opac_down_box rounded-4 py-4 c_pointer">
                  <p className="ff_inter fw_700 fs_lg  clr_purple mb-0 ">
                    POST-AUTOMATION
                  </p>
                </div>
                <img src={sec4_img2} alt="sec4_img2" className="mt-4 pt-3 w_100" />
                <p className="ff_inter fw_700 fs_xl clr_blue mb-0 mt-5">
                  With just 70% implementation
                </p>
                <div className="small_line mx-auto mt-5"></div>
              </Col>
            </Row>
            <div className="max_184 d-none d-md-block">
              <div className="white_circle p-3  position-absolute start-50 translate-middle-x top-0 d-inline-block">
                <div className="border_circular_yellow d-flex align-items-center justify-content-center">
                  <span className="ff_inter fw_700 fs_5xl clr_purple mb-0">
                    V
                  </span>
                  <span className="mt-3 ff_inter fw_700 fs_5xl clr_purple mb-0">
                    S
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Increasing;
