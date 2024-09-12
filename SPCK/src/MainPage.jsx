import { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
//
import LogoUdemy from "../public/LogoUdemy";
import User1 from "../public/User1";
import Cart from "../public/Cart";
import Earth from "../public/Earth";
//
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import CourseList from "./component/CourseList";
import CourseDetail from "./component/CourseDetail";
import User from "./component/User";
import HPCourse from "./component/HomePageCourse";
import HomePageFile from "./HomePageFile";
//
import YourCourse from "./component/User/yourCourse";
import YourInfor from "./component/User/YourInformation";
import SetInfor from "./component/User/YourInformation/SetInfor";
import SetPW from "./component/User/YourInformation/SetPW";
//

import { userLoggedIn, dataUser } from "./data";
//
import "./App.css";
const MainPage = ({ setLogOut, loggedInUser }) => {
  const navigate = useNavigate();
  return (
    <p>
      <div className="homePage">
        <div className="header">
          <div className="eduName">
            <LogoUdemy></LogoUdemy>
          </div>
          <div className="menu">
            <Link to="/">
              <div>Trang chủ</div>
            </Link>
            <div>Khóa học</div>
          </div>
          <div className="user-loggin">
            {loggedInUser ? (
              <>
                <div className="addCart">
                  <Cart></Cart>
                </div>
                <div
                  className="userA"
                  onClick={() => {
                    navigate("/user");
                  }}
                >
                  <User1></User1>
                  <sup>xin chào {loggedInUser}</sup>
                </div>
              </>
            ) : (
              <>
                <Link to="/SignIn">
                  <button className="sign-in">Đăng Nhập</button>
                </Link>
                <Link to="/SignUp">
                  <button className="sign-up">Đăng ký</button>
                </Link>
              </>
            )}
          </div>
        </div>
        <Outlet></Outlet>
        <div className="footer">
          <div className="footer-content">
            <LogoUdemy></LogoUdemy>
            <div className="footer-frame">
              <div className="footer-frame-title">Sản phẩm</div>
              <div className="footer-frame-text">Khóa học</div>
              <div className="footer-frame-text">Bài viết</div>
            </div>
            <div className="footer-frame">
              <div className="footer-frame-title">Chính sách chung</div>
              <div className="footer-frame-text">Bài viết</div>
              <div className="footer-frame-text">Điều khoản dịch vụ</div>
            </div>
            <div className="footer-frame">
              <div className="footer-frame-title">Liên hệ</div>
              <div className="footer-frame-text">Đường dây nóng: 123456789</div>
              {loggedInUser ? (
                <>
                  <div className="translate">
                    <Earth></Earth>
                    <div>Tiếng việt</div>
                  </div>
                  <button onClick={setLogOut} className="logOut-btn">
                    Đăng xuất
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </p>
  );
};

export default MainPage;
