"use client";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "reactstrap";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

function Footer() {
  return (
    <footer id="footer" className="section-bg">
      <div className="footer-top">
        <div className="container">
          <Row>
            <Col lg={6}>
              <Row>
                <Col lg={6}>
                  <div className="footer-info">
                    <h3>VTC CORP</h3>
                    Km8+500 Đại Lộ Thăng Long
                    <br />
                    Hoài Đức Hà Nội.
                    <br />
                    <strong>Phone: </strong>
                    096 986 3959
                    <br />
                    <strong>Email: </strong>
                    vietthang.vantruong@gmail.com
                    <br />
                  </div>
                  <div className="footer-newsletter">
                    <h4>Liên hệ: MR.Trưởng</h4>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="social-links">
                    <a href="#" className="twitter">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ color: "#fff" }}
                      />
                    </a>
                    <a href="#" className="facebook">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        style={{ color: "#fff" }}
                      />
                    </a>{" "}
                    <a href="#" className="instagram">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ color: "#fff" }}
                      />
                    </a>{" "}
                    <a href="#" className="linkedin">
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        style={{ color: "#fff" }}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <form>
                <div className="form-group">
                  <Input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <Input type="textarea" placeholder="Message" />
                </div>
                <div className="text-center">
                  <Button color="primary">Gửi thông tin</Button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          © Copyright
          <strong> Cresoft</strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by
          <a href="#">truongduhocxkld.com</a>
          <br />
          Cảm ơn bạn rất nhiều vì đã xem website chúng tôi mong bạn có thêm
          nhiều thông tin hơn về chúng tôi!
          <br />
          Bản quyền thuộc về truongduhocxkld.com chúng tôi không ủng hộ mọi sự
          sao chép website đến từ các bạn!
          <br />
          Chúng tôi rất cảm ơn bạn!
        </div>
      </div>
    </footer>
  );
}

export default Footer;
