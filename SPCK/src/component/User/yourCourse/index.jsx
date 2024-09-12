import Course from "../../CourseList/Course";
import "./styles.css";

const YourCourse = () => {
  return (
    <div className="yourCourse">
      <div className="search-frame">
        <input type="text" placeholder="Tìm kiếm khóa học của bạn" />
      </div>
      <div className="your-listCourse"></div>
    </div>
  );
};

export default YourCourse;
