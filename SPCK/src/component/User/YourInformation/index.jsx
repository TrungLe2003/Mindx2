import SetInfor from "./SetInfor";
import SetPW from "./SetPW";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import "./styles.css";
const YourInfor = () => {
  return (
    <div className="YourInfor">
      <div className="YourInfor-frame1">
        <Link to="/user/yourinfor">
          {" "}
          <div className="setInforBtn">Chỉnh sửa hồ sơ</div>
        </Link>
        <Link to="/user/yourinfor/changePassWord">
          <div className="setPasswordBtn">Mật khẩu</div>
        </Link>
      </div>
      <div className="YourInfor-frame2">
        <Outlet></Outlet>
        {/* <SetInfor></SetInfor>
        <SetPW></SetPW> */}
      </div>
    </div>
  );
};

export default YourInfor;
