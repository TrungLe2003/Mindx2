import React from "react";
import IconZoom from "../../Icons/IconZoom";
import IconBar from "../../Icons/IconBar";
import "./style.css";

const Filter = () => {
  return (
    <div className="filter">
      <h1 className="titleFilter">Mục yêu thích của bạn.</h1>
      <div className="typeSearch">
        <IconZoom></IconZoom> <input type="text" value="Tìm kiếm" />
      </div>
      <div className="conditionFilter">
        <select name="" id="">
          <option value="">Trạng thái</option>
        </select>
        <select name="" id="">
          <option value="">Danh mục</option>
        </select>
        <select name="" id="">
          <option value="">Đã thêm gần đây</option>
        </select>
        <IconBar></IconBar>
      </div>
    </div>
  );
};

export default Filter;
