import { useContext } from "react";
import "./style.css";
import { Store } from "../../Store";

const Giftitem = (props) => {
  const store = useContext(Store);
  const handleClickGift = () => {
    props.onOpenModal({
      open: true,
      data: props.gift,
    });
    props.setModalIndex(props.index);
  };

  return (
    <div className="item" onClick={handleClickGift}>
      <img src={props.gift.image} alt="" />
      <div className="itemTitle">
        <div className="title">{props.gift.name}</div>
        <img src="/public/cart.png" alt="" className="cart" />
      </div>
      <div className="itemPrice">
        <div className="price">
          {Number(props.gift.price).toLocaleString()} VNĐ
        </div>
        <div className="discount">{props.gift.saleOff * 100} %</div>
      </div>
    </div>
  );
};

export default Giftitem;
