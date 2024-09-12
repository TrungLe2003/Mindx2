import { useState } from "react";
import { useNavigate } from "react-router-dom";

//
import LogoUdemy from "../public/LogoUdemy";
import CiscoLogo from "../public/CompanyLogo/CiscoLogo";
import SamsungLogo from "../public/CompanyLogo/SamsungLogo";
import VolkLogo from "../public/CompanyLogo/Volklogo";
import HewlettLogo from "../public/CompanyLogo/HewlettLogo";
import VimeoLogo from "../public/CompanyLogo/Vimeologo";
import EricssonLogo from "../public/CompanyLogo/EricssonLogo";
//
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import CourseList from "./component/CourseList";
import CourseDetail from "./component/CourseDetail";
import User from "./component/User";
import HPCourse from "./component/HomePageCourse";

//
import { listCategory } from "./data";
//

const HomePageFile = () => {
  // const [courseList, setCourseList] = useState(false);
  const [course, setCourse] = useState(listCategory);
  const navigate = useNavigate();
  // if (courseList) {
  //   navigate("/courseList");
  // }
  return (
    <>
      <div className="banner">
        <img src="/public/UdemyBanne.jpg" alt="" />
        <div className="banner-text">
          <h2>Tham gia học tập với chi phí thấp hơn</h2>
          <p>
            Nếu bạn là người mới sử dụng Udemy thì đây là một tin vui dành cho
            bạn: Trong thời gian có hạn, các khóa học có giá chỉ từ ₫ 299.000
            cho học viên mới! Mua ngay.
          </p>
        </div>
      </div>
      <div className="banner2">
        <p>
          Được hơn 16.000 công ty và hàng triệu học viên trên khắp thế giới tin
          dùng
        </p>
        <div className="company_logo">
          <CiscoLogo></CiscoLogo>
          <SamsungLogo></SamsungLogo>
          <HewlettLogo></HewlettLogo>
          <VolkLogo></VolkLogo>
          <EricssonLogo></EricssonLogo>
          <VimeoLogo></VimeoLogo>
        </div>
      </div>
      <div className="cateGories-list">
        <h2>Thể loại</h2>
        <div className="topCategories-list">
          {listCategory.map((item) => {
            return <HPCourse category={item}></HPCourse>;
          })}
        </div>
      </div>
    </>
  );
};

export default HomePageFile;
