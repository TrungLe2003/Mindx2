import "./style.css";

const Create = (props) => {
  return (
    <div className="create">
      <p className="title"> Quà tặng</p>
      <button className="createButton" onClick={props.openModal2}>
        Tạo
      </button>
    </div>
  );
};

export default Create;
