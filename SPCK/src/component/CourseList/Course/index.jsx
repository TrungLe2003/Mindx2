import "./style.css";
const Course = (props) => {
  return (
    <>
      <div className="Course">
        <img
          src="/public/Categories-list/AmNhac.jpg"
          alt=""
          className="img-course"
        />
        <div className="courseQuickReview">
          <div className="nameCourse row">{props.inforCourse.course}</div>
          <div className="about-Course row">
            {props.inforCourse.aboutCourse}
          </div>
          <div className="author row">Tác giả: {props.inforCourse.author}</div>
          <div className="rate row">4</div>
          <div className="hour row">
            Tổng số giờ: {props.inforCourse.totalTime}h - Số bài giảng:{" "}
            {props.inforCourse.totalLesson} bài
          </div>
        </div>
        <div className="price">600.000 VND</div>
      </div>
    </>
  );
};

export default Course;
