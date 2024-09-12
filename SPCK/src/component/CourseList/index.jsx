import Course from "./Course";
import { listCategory } from "../../data";
import { useLocation } from "react-router-dom";
import "./styles.css";

const CourseList = () => {
  const location = useLocation();
  const { listCourses, nameCategory } = location.state || {};

  return (
    <div className="content">
      <h1 className="nameCourse">Khóa học {nameCategory}</h1>
      <h2>Các khóa học để bắt đầu</h2>
      <p>
        Khám phá các khóa học do các chuyên gia giàu kinh nghiệm trong ngành
        giảng dạy
      </p>
      <div className="Frame1">
        <div className="menu">
          <div className="row">Chủ đề</div>
          <div className="row">Thể loại con</div>
          <div className="row">Cấp độ</div>
          <div className="row">Giá</div>
          <div className="row">Đặc điểm</div>
        </div>
        <div className="courseList">
          {listCourses?.map((item, index) => (
            <Course key={index} inforCourse={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
