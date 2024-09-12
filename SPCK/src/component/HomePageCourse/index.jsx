import { useState } from "react";
import { useNavigate } from "react-router-dom";
const HPCourse = (props) => {
  const navigate = useNavigate();
  const handleClickCategoryList = () => {
    // Điều hướng tới CourseList và truyền dữ liệu danh mục
    navigate("/courseList", { state: props.category });
    // state trong navigate: cách truyền dữ liệu từ trang hiện tại sang trang đích courselist
  };
  return (
    <div className="category" onClick={handleClickCategoryList}>
      <img src={props.category.image} alt="" />
      <div className="title">{props.category.nameCategory}</div>
    </div>
  );
};

export default HPCourse;
