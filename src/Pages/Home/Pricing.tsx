import Image from "next/image";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import pricingImage from "../../Assets/Images/z2438745269455_57b138292b8e62d380488d442cfb103f.jpg";
const Pricing = () => {
  return (
    <section id="pricing" className="section-bg">
      <div className="container">
        <div className="section-header">
          <h3>BÀI VIẾT TIÊU BIỂU</h3>
          <p>Bạn nên tham khảo!</p>
        </div>
        <div className="row flex-items-xs-middle flex-items-xs-center">
          <Row>
            <Col lg={4}>
              <Image src={pricingImage} alt="pricing" />
            </Col>
            <Col lg={8} className="title">
              <h4 className="title">
                <a href="" style={{ textDecoration: "none" }}>
                  TUYỂN NAM, NỮ ĐI LÀM VIỆC TẠI RUMANI
                </a>
              </h4>
              <p className="description">CHẾ BIẾN THỊT GÀ</p>
              <small>
                <FontAwesomeIcon icon={faCalendar} /> 01-12-2021{" "}
                <FontAwesomeIcon icon={faLayerGroup} /> RUMANI - CHÂU ÂU
              </small>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg={4}>
              <Image src={pricingImage} alt="pricing" />
            </Col>
            <Col lg={8} className="title">
              <h4 className="title">
                <a href="" style={{ textDecoration: "none" }}>
                  TUYỂN NAM, NỮ ĐI LÀM VIỆC TẠI RUMANI
                </a>
              </h4>
              <p className="description">CHẾ BIẾN THỊT GÀ</p>
              <small>
                <FontAwesomeIcon icon={faCalendar} /> 01-12-2021{" "}
                <FontAwesomeIcon icon={faLayerGroup} /> RUMANI - CHÂU ÂU
              </small>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col lg={4}>
              <Image src={pricingImage} alt="pricing" />
            </Col>
            <Col lg={8} className="title">
              <h4 className="title">
                <a href="" style={{ textDecoration: "none" }}>
                  TUYỂN NAM, NỮ ĐI LÀM VIỆC TẠI RUMANI
                </a>
              </h4>
              <p className="description">CHẾ BIẾN THỊT GÀ</p>
              <small>
                <FontAwesomeIcon icon={faCalendar} /> 01-12-2021{" "}
                <FontAwesomeIcon icon={faLayerGroup} /> RUMANI - CHÂU ÂU
              </small>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col lg={4}>
              <Image src={pricingImage} alt="pricing" />
            </Col>
            <Col lg={8} className="title">
              <h4 className="title">
                <a href="" style={{ textDecoration: "none" }}>
                  TUYỂN NAM, NỮ ĐI LÀM VIỆC TẠI RUMANI
                </a>
              </h4>
              <p className="description">CHẾ BIẾN THỊT GÀ</p>
              <small>
                <FontAwesomeIcon icon={faCalendar} /> 01-12-2021{" "}
                <FontAwesomeIcon icon={faLayerGroup} /> RUMANI - CHÂU ÂU
              </small>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col lg={4}>
              <Image src={pricingImage} alt="pricing" />
            </Col>
            <Col lg={8} className="title">
              <h4 className="title">
                <a href="" style={{ textDecoration: "none" }}>
                  TUYỂN NAM, NỮ ĐI LÀM VIỆC TẠI RUMANI
                </a>
              </h4>
              <p className="description">CHẾ BIẾN THỊT GÀ</p>
              <small>
                <FontAwesomeIcon icon={faCalendar} /> 01-12-2021{" "}
                <FontAwesomeIcon icon={faLayerGroup} /> RUMANI - CHÂU ÂU
              </small>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col lg={4}>
              <Image src={pricingImage} alt="pricing" />
            </Col>
            <Col lg={8} className="title">
              <h4 className="title">
                <a href="" style={{ textDecoration: "none" }}>
                  TUYỂN NAM, NỮ ĐI LÀM VIỆC TẠI RUMANI
                </a>
              </h4>
              <p className="description">CHẾ BIẾN THỊT GÀ</p>
              <small>
                <FontAwesomeIcon icon={faCalendar} /> 01-12-2021{" "}
                <FontAwesomeIcon icon={faLayerGroup} /> RUMANI - CHÂU ÂU
              </small>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
