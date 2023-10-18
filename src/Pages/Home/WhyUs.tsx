import Image from "next/image";
import whyus from "../../Assets/Images/why-us.jpg";
import { Row, Col, Carousel, CarouselIndicators } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faObjectGroup } from "@fortawesome/free-regular-svg-icons";
import { faDiamond, faLanguage } from "@fortawesome/free-solid-svg-icons";
const Whyus = () => {
  return (
    <section id="why-us">
      <div className="container-fluid">
        <div className="section-header">
          <h3>Vì sao nên chọn chúng tôi?</h3>
        </div>
        <Row>
          <Col lg={6}>
            <div className="why-us-image">
              <Image src={whyus} alt="author" className="img-fluid" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="why-us-content">
              <p>
                Chúng tôi đã được nhiều tổ chức có uy tín trong và ngoài nước
                đánh giá cao và lựa chọn làm đối tác lâu dài bởi chất lượng sản
                phẩm và phong cách làm việc chuyên nghiệp của đội ngũ nhân viên.
              </p>
              <p>
                Với hơn nhiều khách hàng hài lòng về chúng tôi giúp chúng tôi tự
                tin mang lại thành quả tốt đẹp cho đối tác của mình. Với chuyên
                môn và kinh nghiệm đang có, Việt Thắng mong mỏi và tự tin trở
                thành sự lựa chọn của Quý khách hàng.
              </p>
              <div className="features wow bounceInUp clearfix">
                <FontAwesomeIcon
                  icon={faDiamond}
                  style={{ color: "#f058dc" }}
                />
                <h4>Uy tín trách nhiệm với từng học viên</h4>
                <p>
                  Với hơn 5000 học viên đã sang Nhật, 1.200 học viên học viên đã
                  sang Hàn Quốc và rất nhiều thị trường khác.
                </p>
              </div>
              <div className="features wow bounceInUp clearfix">
                <FontAwesomeIcon
                  icon={faObjectGroup}
                  style={{ color: "#ffb774" }}
                />
                <h4>Trang thiết bị cơ sở vật chất</h4>
                <p>
                  Với hơn 50 phòng học với trang thiết bị rộng rãi, thoáng mát,
                  cơ sở vật chất đầy đủ, tiện nghi sinh hoạt cho học viên. Có ký
                  túc cho các bạn ở xa.
                </p>
              </div>
              <div className="features wow bounceInUp clearfix">
                <FontAwesomeIcon
                  icon={faLanguage}
                  style={{ color: "#589af1" }}
                />
                <h4>Chất lượng đào tạo hàng đầu</h4>
                <p>
                  Chương trình đào tạo thiết kế phù hợp với nhiều đối tượng, do
                  giáo viên người nước ngoài phối hợp với giáo viên trợ giảng
                  người Việt giảng dạy.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row className="counters">
          <Col lg={3} className="text-center">
            <span data-toggle="counter-up">274</span>
            <p>Việc làm</p>
          </Col>
          <Col lg={3} className="text-center">
            <span data-toggle="counter-up">421</span>
            <p>Đối tác công việc</p>
          </Col>
          <Col lg={3} className="text-center">
            <span data-toggle="counter-up">6,364</span>
            <p>Học viên</p>
          </Col>
          <Col lg={3} className="text-center">
            <span data-toggle="counter-up">64</span>
            <p>Dự án du học - xuất khẩu</p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Whyus;
