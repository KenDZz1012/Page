import Image from "next/image";
import whyus from "../../Assets/Images/why-us.jpg";
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="aboutInfo">
          <div className="about-img">
            <div className="about-image">
              <Image src={whyus} alt="Picture of the author" />
            </div>
          </div>
          <div className="about-content">
            <div>
              Giới thiệu Lời đầu tiên chúng tôi xin gửi tới Quý khách hàng lời
              chúc sức khỏe và lời chào trân trọng nhất! Chúc quý khách hàng sự
              phát triển và thành công. Công ty xin gửi lời cảm ơn chân thành
              nhất tới những khách hàng đã, đang và sẽ cho phép chúng tôi trở
              thành một người bạn đồng hành cũng như đã dành sự tín nhiệm và ủng
              hộ tới sản phẩm, dịch vụ mà công ty cung cấp. Mục tiêu của chúng
              tôi: Được thành lập chính thức tại Việt Nam từ năm 2006, với tinh
              thần đoàn kết của tập thể năng động và không ngừng học hỏi, không
              ngừng tìm kiếm các thị trường mới để giúp công ty hoàn thành sứ
              mệnh mà mình đặt ra. Công ty hoạt động chuyên doanh đưa Người lao
              động và Chuyên gia Việt Nam đi làm việc có thời hạn ở nước ngoài
              theo Giấy phép của Bộ Lao động Thương binh và Xã hội cấp. Từ khi
              thành lập, với sự quản lý và chỉ đạo của Ban Lãnh đạo Công ty,
              cùng với sự nỗ lực phấn đấu không ngừng của tập thể CBNV trong
              Công ty. Công ty đã dần từng bước khẳng định được vị thế của mình
              trong lĩnh vực Xuất Khẩu Lao Động nói chung. Trong thời gian qua,
              Công ty đã đưa sang các thị trường tiếp nhận lao động lớn như:
              Nhật Bản, Đài Loan, Châu Âu, các nước Trung Đông,...với số lượng
              hàng chục nghìn lao động đồng thời xây dựng hệ thống Văn phòng đại
              diện, cán bộ phiên dịch tại các nước tiếp nhận nhằm kịp thời hỗ
              trợ và giúp đỡ Người lao động trong thời gian làm việc tại nước
              ngoài. Cùng với đó là xây dựng quan hệ với các đối tác lớn, có uy
              tín tại các thị trường tiếp nhận lao động. Với phương châm hoạt
              động kinh doanh “Chuyên nghiệp – Tận tụy – Sáng tạo” không ngừng
              tạo ra các sản phẩm và dịch vụ với chất lượng tốt nhất nhằm phục
              vụ xã hội và cộng đồng. Công ty đã từng bước trở thành Doanh
              nghiệp lớn mạnh, hoạt động đa ngành nghề. Trong đó lấy XKLĐ, Xây
              dựng, Kinh doanh xuất nhập khẩu là các lĩnh vực chủ đạo, tạo thế
              phát triển bền vững, góp một phần vào công cuộc phát triển xã hội
              của Đất nước theo chủ trương chính sách của Đảng và Nhà nước.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
