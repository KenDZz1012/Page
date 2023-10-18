import Image from "next/image";
import { Row, Col } from "reactstrap";
import boxImg from "../../Assets/Images/z4584659776271_b9432009959b91d1aa7e6348de292f76.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
const Service = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="service-header">
          <h3>TIN TỨC</h3>
          <p>Đón nhận những tin tức mới nhất của đội ngũ chúng tôi mang lại!</p>
        </div>
        <Row>
          <Col lg={3}>
            <div className="box">
              <div>
                <Image src={boxImg} alt="Picturer" className="boxImg" />
              </div>
              <h4 className="title">
                <a href="">
                  TUYỂN NGUỒN LAO ĐỘNG ĐI LÀM VIỆC CÓ THỜI HẠN TẠI HY LẠP
                </a>
              </h4>
              <p className="description">
                XUẤT KHẨU LAO ĐỘNG - ĐƠN HÀNG NÔNG NGHIỆP HY LẠP
              </p>
              <small>
                <FontAwesomeIcon icon={faCalendar} /> 08-08-2023{" "}
                <FontAwesomeIcon icon={faLayerGroup} /> HY LẠP - CHÂU ÂU
              </small>
            </div>
          </Col>
          <Col lg={3}>
            <div className="box">
              <div>
                <Image src={boxImg} alt="Picturer" className="boxImg" />
              </div>
              <h4 className="title">
                <a href="">
                  TUYỂN NGUỒN LAO ĐỘNG ĐI LÀM VIỆC CÓ THỜI HẠN TẠI HY LẠP
                </a>
              </h4>
              <p className="description">
                XUẤT KHẨU LAO ĐỘNG - ĐƠN HÀNG NÔNG NGHIỆP HY LẠP
              </p>
              <small>
                <FontAwesomeIcon icon={faCalendar} /> 08-08-2023{" "}
                <FontAwesomeIcon icon={faLayerGroup} /> HY LẠP - CHÂU ÂU
              </small>
            </div>
          </Col>
          <Col lg={3}>
            <div className="box">
              <div>
                <Image src={boxImg} alt="Picturer" className="boxImg" />
              </div>
              <h4 className="title">
                <a href="">
                  TUYỂN NGUỒN LAO ĐỘNG ĐI LÀM VIỆC CÓ THỜI HẠN TẠI HY LẠP
                </a>
              </h4>
              <p className="description">
                XUẤT KHẨU LAO ĐỘNG - ĐƠN HÀNG NÔNG NGHIỆP HY LẠP
              </p>
              <small>
                <FontAwesomeIcon icon={faCalendar} /> 08-08-2023{" "}
                <FontAwesomeIcon icon={faLayerGroup} /> HY LẠP - CHÂU ÂU
              </small>
            </div>
          </Col>
          <Col lg={3}>
            <div className="box">
              <div>
                <Image src={boxImg} alt="Picturer" className="boxImg" />
              </div>
              <h4 className="title">
                <a href="">
                  TUYỂN NGUỒN LAO ĐỘNG ĐI LÀM VIỆC CÓ THỜI HẠN TẠI HY LẠP
                </a>
              </h4>
              <p className="description">
                XUẤT KHẨU LAO ĐỘNG - ĐƠN HÀNG NÔNG NGHIỆP HY LẠP
              </p>
              <small>
                <FontAwesomeIcon icon={faCalendar} /> 08-08-2023{" "}
                <FontAwesomeIcon icon={faLayerGroup} /> HY LẠP - CHÂU ÂU
              </small>
            </div>
          </Col>
          <Col lg={3}>
            <div className="box">
              <div>
                <Image src={boxImg} alt="Picturer" className="boxImg" />
              </div>
              <h4 className="title">
                <a href="">
                  TUYỂN NGUỒN LAO ĐỘNG ĐI LÀM VIỆC CÓ THỜI HẠN TẠI HY LẠP
                </a>
              </h4>
              <p className="description">
                XUẤT KHẨU LAO ĐỘNG - ĐƠN HÀNG NÔNG NGHIỆP HY LẠP
              </p>
              <small>
                <FontAwesomeIcon icon={faCalendar} /> 08-08-2023{" "}
                <FontAwesomeIcon icon={faLayerGroup} /> HY LẠP - CHÂU ÂU
              </small>
            </div>
          </Col>
          <Col lg={3}>
            <div className="box">
              <div>
                <Image src={boxImg} alt="Picturer" className="boxImg" />
              </div>
              <h4 className="title">
                <a href="">
                  TUYỂN NGUỒN LAO ĐỘNG ĐI LÀM VIỆC CÓ THỜI HẠN TẠI HY LẠP
                </a>
              </h4>
              <p className="description">
                XUẤT KHẨU LAO ĐỘNG - ĐƠN HÀNG NÔNG NGHIỆP HY LẠP
              </p>
              <small>
                <FontAwesomeIcon icon={faCalendar} /> 08-08-2023{" "}
                <FontAwesomeIcon icon={faLayerGroup} /> HY LẠP - CHÂU ÂU
              </small>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Service;
