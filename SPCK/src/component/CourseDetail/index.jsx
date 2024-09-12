import BoxLogo from "../../../public/CompanyLogo/boxLogo";
import NasdaqLogo from "../../../public/CompanyLogo/nasdaqLogo";
import NetApp from "../../../public/CompanyLogo/netappLogo";
import EventBriteLogo from "../../../public/CompanyLogo/eventbriteLogo";
import VolkLogo from "../../../public/CompanyLogo/Volklogo";

import "./style.css";

const CourseDetail = () => {
  return (
    <>
      <div className="CDbanner">
        <div className="quickRv">
          <div className="Coursename">
            Khóa học Figma từ căn bản đến thực chiến
          </div>
          <div className="title">
            Những kiến thức nền tảng và chuyên sâu nhất về figma từ kinh nghiệm
            2 năm giảng dạy
          </div>
          <div className="rating">4</div>
          <div className="author">Được tạo bởi: TrungLe</div>
        </div>
        <div className="addcartframe">
          <img
            src="/public/Categories-list/NhiepAnh-v2.jpg"
            alt=""
            className="course-img"
          />
          <div className="price">đ 600.000</div>
          <ul className="result">
            <div className="related">Khóa học này gồm:</div>
            <li>Truy cập trên thiết bị di động và TV</li>
            <li> Quyền truy cập đầy đủ suốt đời</li>
            <li> Giấy chứng nhận hoàn thành </li>
          </ul>
          <div className="frameBtn">
            <button className="addCartBtn">Thêm vào giỏ hàng</button>
            <button className="LikeBtn">Like</button>
          </div>
        </div>
      </div>
      <div className="CDcontent">
        <div className="sponsoringCompany">
          <h2>Các công ty cung cấp khóa học này</h2>
          <div className="companyList">
            <BoxLogo></BoxLogo>
            <NetApp></NetApp>
            <VolkLogo></VolkLogo>
            <EventBriteLogo></EventBriteLogo>
          </div>
        </div>
        <div className="required">
          <h2>Yêu cầu</h2>
          <ul>
            <li>Học từ bước khởi đầu nên không đòi hỏi thêm kiến thức khác</li>
            <li>Cần có laptop</li>
            <li>Cần sự tập trung và kiên trì</li>
          </ul>
        </div>

        <div className="Describe">
          <h2>Mô tả</h2>
          <div className="frame1 frame">
            <h3>Khóa học này có gì</h3>
            <p>
              Khóa học thiết kế giao diện bằng Figma dành cho những bạn có đam
              mê với ngành nghề UI/UX design. Khóa học tập trung vào những kỹ
              năng căn bản nhất, đồng thời cung cấp một cái nhìn tổng quát giúp
              học viên có thể tạo ra sản phẩm cụ thể sau khóa học.
            </p>
          </div>
          <div className="frame2 frame">
            <h3>Khóa học này dạy những gì</h3>
            <ul>
              <li>Cách một dự án thiết kế giao diện UI/UX được thực thi</li>
              <li>Kiến thức căn bản về cách tận dụng Figma</li>
              <li>
                Các mẹo vặt để làm việc khoa học và tư duy theo lối lập trình
              </li>
              <li>
                Phương pháp nghiên cứu để luôn tìm ra câu trả lời cho cái mình
                chưa biết trong Figma
              </li>
              <li>
                Vun đắp mối quan hệ Designer - Developer với những sản phẩm ăn ý
              </li>
            </ul>
          </div>
          <div className="frame3 frame">
            <h3>RỒI HỌC XONG ĐƯỢC GÌ?</h3>
            <ul>
              <li>
                Thuần thục cách sử dụng công cụ; hiểu rõ ngôn ngữ thiết kế; thấu
                hiểu tư duy bài bản
              </li>
              <li>Tự tin thực hiện hoá ý tưởng của mình trên các thiết kế</li>
              <li>
                Biết cách dùng phần mềm như một người làm UI/UX với lối tư duy
                hệ thống, nắm vững nền tảng cơ bản; sắp xếp và quản lý các công
                việc một cách khoa học
              </li>
              <li>
                Giảm đến hơn 60% thời gian cho các thao tác lặp đi lặp lại bằng
                việc tạo ra các component
              </li>
              <li>
                Tự tạo ra những thiết kế Website/App cực chất, sẵn sàng để trở
                thành một Designer ở các Agency chuyên xây dựng website.
              </li>
              <li>
                Đặc biệt, quà tặng Ebook Figma Design Notebook được gửi tặng
                ngay sau khóa học, được biên soạn với kiến thức bổ sung, được hệ
                thống lại và cập nhật từng đợt, đảm bảo chưa bao giờ bị lỗi nhịp
                với thời đại.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
