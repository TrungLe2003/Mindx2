import ImageAddAva from "../../../../../public/ImageAva";
import "./styles.css";
const SetInfor = () => {
  return (
    <div className="setInfor">
      <div className="setIF-header">
        <p>
          <h2>Sửa hồ sơ của bạn</h2>
          <div>Điều này sẽ được chia sẻ với các học viên khác</div>
        </p>
        <button className="saveSetIF">Lưu</button>
      </div>
      <div className="setIF-main">
        <div className="setIF-main-frame1">
          <h3>Ảnh hồ sơ</h3>
          <div className="frame1-setAva">
            <div className="setIFMain-setAva">
              <ImageAddAva></ImageAddAva>
            </div>
            <p>PNG hoặc JPG có chiều rộng và chiều cao không lớn hơn 800px.</p>
          </div>
        </div>
        <div className="setIF-main-frame2">
          <div className="sq">
            <h3>Họ và tên</h3>
            <input type="text" placeholder="Tên" />
          </div>
          <div className="sq">
            <h3>Sinh nhật</h3>
            <input type="text" placeholder="Sinh nhật" />
          </div>
          <div className="sq">
            <h3>Email</h3>
            <input type="text" placeholder="Email" />
          </div>
          <div className="sq">
            <h3>Số điện thoại</h3>
            <input type="number" placeholder="Số điện thoại" />
          </div>
        </div>
        <div className="setIF-main-frame3">
          <h3>Địa chỉ</h3>
          <input type="text" placeholder="Địa chỉ" />
        </div>
        <div className="setIF-main-frame4">
          <h3>Mô tả</h3>
          <input type="text" placeholder="Mô tả" />
        </div>
      </div>
    </div>
  );
};

export default SetInfor;
