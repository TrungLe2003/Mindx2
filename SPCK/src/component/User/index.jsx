import LogoUdemy from "../../../public/LogoUdemy";
import HomePage from "../../../public/homepage";
import Book from "../../../public/book";
import User1 from "../../../public/User1";
import User2 from "../../../public/User2";
import Earth from "../../../public/Earth";
import Heart from "../../../public/Heart";
import Cart from "../../../public/Cart";
//
import { Link } from "react-router-dom";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
//
import YourCourse from "./yourCourse";
import YourInfor from "./YourInformation";
import SetInfor from "./YourInformation/SetInfor";
import SetPW from "./YourInformation/SetPW";
//

import "./styles.css";

const User = () => {
  const navigate = useNavigate();
  return (
    <div className="Users">
      <div className="profileMenu">
        <div className="logoUdemy">
          <LogoUdemy></LogoUdemy>
        </div>
        <div className="menu-list">
          <div className="course menu-list-row">
            <Book></Book>
            <Link to="/user">
              <span>Bài học của tôi</span>
            </Link>
          </div>
          <div className="user-profile menu-list-row">
            <User2></User2>
            <Link to="/user/yourinfor">
              <span>Thông tin tài khoản</span>
            </Link>
          </div>
          <div className="love-course menu-list-row">
            <Heart></Heart>
            <span>Đã thích</span>
          </div>
        </div>
      </div>
      <div className="profile-content">
        <header>
          <div className="frame frame1">
            <HomePage></HomePage>
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Trang chủ
            </p>
          </div>
          <div className="frame2 frame">
            <div className="addCart">
              <Cart></Cart>
            </div>

            <div className="translate">
              <Earth></Earth>
            </div>
            <div className="userA">
              <User1></User1>
              <sub>Học viên</sub>
            </div>
          </div>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default User;
