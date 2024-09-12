import IconLeft from "../../Icons/IconLeft";
import IconRight from "../../Icons/IconRight";
import "./style.css";

const Pagination = () => {
  return (
    <div className="pagination">
      <IconLeft className="icon"></IconLeft>
      <div className="pagesItem">
        <div className="pages">
          <button className="page">1</button>
          <button className="page">2</button>
          <button className="page">3</button>
          <button className="page">4</button>
        </div>
        <div className="pageBar">...</div>
      </div>
      <IconRight className="icon"></IconRight>
    </div>
  );
};

export default Pagination;
