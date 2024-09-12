import React, { useContext } from "react";
import IconBin from "../../Icons/IconBin";
import IconStar from "../../Icons/IconStar";
import IconStarU from "../../Icons/IconStarU";
import IconArrowDown from "../../Icons/IconArrowDown";
import IconBoldType from "../../Icons/IconBoldType";
import IconItalicizedType from "../../Icons/IconItalicizedType";
import IconType3 from "../../Icons/IconType3";
import "./style.css";
import { Store } from "../../Store";
import { useParams } from "react-router-dom";

const getRating = {
  1: (
    <div className="quickOverview-rating">
      <IconStar></IconStar>
      <IconStarU></IconStarU>
      <IconStarU></IconStarU>
      <IconStarU></IconStarU>
      <IconStarU></IconStarU>
    </div>
  ),
  2: (
    <div className="quickOverview-rating">
      <IconStar></IconStar>
      <IconStar></IconStar>
      <IconStarU></IconStarU>
      <IconStarU></IconStarU>
      <IconStarU></IconStarU>
    </div>
  ),
  3: (
    <div className="quickOverview-rating">
      <IconStar></IconStar>
      <IconStar></IconStar>
      <IconStar></IconStar>
      <IconStarU></IconStarU>
      <IconStarU></IconStarU>
    </div>
  ),
  4: (
    <div className="quickOverview-rating">
      <IconStar></IconStar>
      <IconStar></IconStar>
      <IconStar></IconStar>
      <IconStar></IconStar>
      <IconStarU></IconStarU>
    </div>
  ),
  5: (
    <div className="quickOverview-rating">
      <IconStar></IconStar>
      <IconStar></IconStar>
      <IconStar></IconStar>
      <IconStar></IconStar>
      <IconStar></IconStar>
    </div>
  ),
};
const Modal = (props) => {
  const store = useContext(Store);
  const params = useParams();
  const currentId = params.productId;
  const currentProduct = store.listGift.findIndex(
    (item) => String(item.id) === String(currentId)
  ); // vì lấy ở trên console nên ta ép kiểu string luôn
  console.log(params);
  console.log(currentProduct);

  const handleDeleteModal = () => {
    store.listGift.splice(props.index, 1); // xóa phần tử, cần phải setState để cập nhật lại mảng
    store.setListGift([...store.listGift]);
    console.log(store.listGift);
  };

  return (
    <div className="modalGift">
      <div className="popUp">
        <div className="header">
          <div onClick={handleDeleteModal}>
            <IconBin></IconBin>
          </div>
          <div onClick={props.onCloseModal}>X</div>
        </div>
        {currentProduct < 0 ? (
          <p>Không có sản phẩm</p>
        ) : (
          <div className="content">
            <div className="overView">
              <div className="frame">
                <img
                  src={store.listGift[currentProduct].image}
                  alt=""
                  className="productImg"
                />
                <div className="quickOverview">
                  <div className="quickOverview-title">
                    {store.listGift[currentProduct].name}
                  </div>
                  {getRating[store.listGift[currentProduct].rating]}
                  <div className="quickOverview-price">
                    <div className="price">
                      Giá:
                      {Number(
                        store.listGift[currentProduct].price
                      ).toLocaleString()}
                      VNĐ
                    </div>
                    <div>
                      <IconArrowDown></IconArrowDown>
                    </div>
                    <div className="saleOff">
                      {store.listGift[currentProduct].saleOff}
                    </div>
                  </div>
                  <div className="quickOverview-status">
                    <div className="status">Phân loại</div>
                    <div className="choose-size">
                      <button>Nhỏ</button>
                      <button>Vừa</button>
                      <button>Lớn</button>
                    </div>
                  </div>
                  <div className="quickOverview-addcart">
                    <div className="amount">
                      <button className="decrease-btn amount-btn">-</button>
                      <div className="count">0</div>
                      <button className="increase-btn amount-btn">+</button>
                    </div>
                    <button className="add-cart-btn">Chọn mua</button>
                  </div>
                </div>
              </div>
              <p>
                Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương
                vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ,
                thân thiện với mọi nhà
              </p>
            </div>
            {/* note */}
            <div className="notes">
              <div className="notes-frame1">
                <div className="other-user">
                  <img src="./public/otherUser.png" alt="" />
                  <div className="other-username">John Doe</div>
                </div>
                <p className="otherUser-comment">
                  Sản phẩm này sẽ mua tặng cho gia đình sau ngày 15 nè!
                </p>
                <div className="line0"></div>
                <div className="add-comment">
                  <div className="font-setting">
                    <IconBoldType></IconBoldType>
                    <IconItalicizedType></IconItalicizedType>
                    <IconType3></IconType3>
                  </div>
                  <button className="comment-add-btn">Comment</button>
                </div>
              </div>
              <h2>Ghi chú</h2>
              <div className="line"></div>
              <p>Danh sách ghi chú</p>
              <div className="comment">
                <div className="user">
                  <img src="./public/user.png" alt="" />
                  <div className="username">You</div>
                </div>
                <div className="user-comment">
                  Lưu lại đã, rồi mấy nữa tính tiếp...
                </div>
                <div className="delete-comment">
                  <div className="time-comment">5 mins ago</div>
                  <IconBin></IconBin>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
