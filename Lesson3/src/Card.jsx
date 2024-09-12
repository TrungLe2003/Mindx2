import "./Card.css";
const Card = (props) => {
  console.log(props);

  return (
    <div className="card" onClick={props.abc}>
      {props.children}
      <div className="name">Name: {props.name}</div>
      <div className="age">Price: {Number(props.price).toLocaleString()} </div>
    </div>
  );
};

export default Card;
