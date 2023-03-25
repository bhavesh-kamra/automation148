import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sec3_img1 from "../assets/images/png/sec3_img1.png";
import sec3_img2 from "../assets/images/png/sec3_img2.png";
import sec3_img3 from "../assets/images/png/sec3_img3.png";
import sec3_img4 from "../assets/images/png/sec3_img4.png";
import sec3_img5 from "../assets/images/png/sec3_img5.png";
import rightarrow_yellow from "../assets/images/svg/rightarrow_yellow.svg";
import greyshadow from "../assets/images/png/greyshadow.png";

const PostAuto = () => {
  return (
    <section className="position-relative py-5">
      <div className="bottom_grey_line position-absolute bottom_32_percent d-none d-xl-block"></div>
      <div className="top_grey_line position-absolute top_21_percent d-none d-xl-block"></div>
      <Container className="">
        <div className=" text-center pb-lg-5">
          <p className="ff_inter fw_700 fs_5xl clr_blue mb-4">
            Post-Automation
          </p>
          <p className="ff_inter fw_400 fs_md clr_black">
            <span className="fw_700"> End-to-end automation </span>on the Yardi
            platform
          </p>
        </div>
        <Row className="justify-content-center align-items-start align-items-lg-center my-5 mt-lg-5 pt-lg-5 ">
        
          <Col
            md={4}
            className="  position-relative mb-lg-5 pb-lg-5 mt-3 mt-lg-0"
          >
            <div className=" p-lg-5 mb-lg-5">
              <div className=" p- 5 mb-lg-5">
                <div className=" p-lg-4 mb-lg-5 text-center text-lg-start">
                  <img
                    src={greyshadow}
                    alt="greyshadow"
                    className="position-absolute greyshadow_pos w-1 00 d-none d-lg-block"
                  />
                  <img src={sec3_img1} alt="notes" />
                  <p className="ff_inter fw_500 mt-4 fs_sm clr_light_black">
                    System picks up invoices
                    <span className="clr_yellow"> automatically</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="  position-relative mb-lg-5 pb-lg-5">
          
            <div className=" p-lg-5 mb-lg-5">
              <div className=" p- 5 mb-lg-5">
                <div className=" p-lg-4 mb-lg-5 text-center text-lg-start">
                  <img
                    src={rightarrow_yellow}
                    alt="rightarrow_yellow"
                    className="position-absolute  frst_sec_yel_arrow d-none d-lg-block"
                  />
                  <img
                    src={greyshadow}
                    alt="greyshadow"
                    className="position-absolute greyshadow_pos w-1 00 d-none d-lg-block"
                  />
                  <img src={sec3_img2} alt="notes" />
                  <p className="ff_inter fw_500 mt-4 fs_sm clr_light_black">
                    Validating businessrules,{" "}
                    <span className="clr_yellow">coding</span>, and
                    <span className="clr_yellow"> handling</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="  position-relative mb-lg-5 pb-lg-5">
            
            <div className=" p-lg-5 mb-lg-5">
              <div className=" p- 5 mb-lg-5">
                <div className=" p-lg-4 mb-lg-5 text-center text-lg-start">
                  <img
                    src={rightarrow_yellow}
                    className="position-absolute  frst_sec_yel_arrow d-none d-lg-block"
                    alt="rightarrow_yellow"
                  />
                  <img
                    src={greyshadow}
                    alt="greyshadow"
                    className="position-absolute greyshadow_pos w-1 00 d-none d-lg-block"
                  />
                  <img src={sec3_img3} alt="notes" />
                  <p className="ff_inter fw_500 mt-4 fs_sm clr_light_black">
                    <span className="clr_yellow">Invoice distribution</span>by
                    gathering contact details
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="position-relative mt-5">
           
            <div className="p-lg-5">
              <div className="p-lg-4  text-center text-lg-start">
                <img
                  src={greyshadow}
                  alt="greyshadow"
                  className="position-absolute greyshadow_pos d-none d-lg-block"
                />
                <img src={sec3_img4} alt="notes" />
                <p className="ff_inter fw_500 mt-4 fs_sm clr_light_black">
                  <span className="clr_yellow">Sending emails </span> with
                  attachments with invoices to the recipients.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className="  position-relative mt-5">
          
            <div className="p-lg-5">
              <div className="p-lg-4 text-center text-lg-start">
                <img
                  src={rightarrow_yellow}
                  alt="rightarrow_yellow"
                  className="position-absolute  yellow_down_pos d-none d-lg-block"
                />
                <img
                  src={greyshadow}
                  alt="shadowbox"
                  className="position-absolute greyshadow_pos   d-none d-lg-block"
                />
                <img src={sec3_img5} alt="notes" />
                <p className="ff_inter fw_500 mt-4 fs_sm clr_light_black">
                  Finance receives system-generated
                  <span className="clr_yellow">automated summaries</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PostAuto;
