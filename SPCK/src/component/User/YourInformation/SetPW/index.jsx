import "./styles.css";
const SetPW = () => {
  return (
    <div className="setPW">
      <div className="setPW-header">
        <h2>Thay đổi mật khẩu</h2>
      </div>
      <div className="setPW-main">
        <div className="setPW-main-frame">
          <h3>Mật khẩu hiện tại</h3>
          <input type="text" placeholder="Mật khẩu hiện tại" />
        </div>
        <div className="setPW-main-frame">
          <h3>Mật khẩu mới</h3>
          <input type="text" placeholder="Mật khẩu mới " />
        </div>
        <div className="setPW-main-frame">
          <h3>Xác nhận mật khẩu mới</h3>
          <input type="text" placeholder="Xác nhận mật khẩu mới" />
        </div>
      </div>
      <button className="savePW-btn">Lưu mật khẩu</button>
    </div>
  );
};

export default SetPW;
