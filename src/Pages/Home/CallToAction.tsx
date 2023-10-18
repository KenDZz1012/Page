import { Row, Col } from "reactstrap";
const CallToAction = () => {
  return (
    <section id="call-to-action" className="wow fadeInUp">
      <div className="container">
        <Row>
          <Col lg={9} className="text-lg-left text-center">
            <h3 className="cta-title">TRAO ĐỔI - TƯ VẤN!</h3>
            <p className="cta-text">
              Liên hệ ngay với chúng tôi để nhận được những tư vấn cùng các
              chương trình ưu đãi dành cho học viên trong tháng 10 này nhé!{" "}
            </p>
          </Col>
          <Col lg={3} className="cta-btn-container text-center">
            <a href="#" className="cta-btn align-middle">
              Liên hệ ngay
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CallToAction;
