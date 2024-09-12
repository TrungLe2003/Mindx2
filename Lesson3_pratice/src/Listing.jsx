import { useContext, useState } from "react";
import LikeNow from "./components/LikeNow";
import Filter from "./components/Filter";
import Create from "./components/Create";
import Giftitem from "./components/Giftitem";
import Pagination from "./components/Pagination";
import Modal from "./components/Modal";
import Modal2 from "./components/ModalAdd";
import { Store } from "./Store";
import { Routes, Route, useParams, Outlet } from "react-router-dom";
import { listGift } from "./data";
import "./App.css"; //luôn import file css ở cuối cùng
const Listing = () => {
  const [modalCreateGift, setModalCreateGift] = useState(false);
  // const [gifts, store.setListGift] = useState(listGift); // lấy dữ liệu cũ
  const store = useContext(Store); //Cách truyền dữ liệu bằng Context
  const params = useParams();
  console.log(params.productId);

  const [newGift, setNewGift] = useState({
    name: "",
    image: "",
    rating: "",
    describe: "",
    price: "",
    saleOff: "",
    category: "",
    type: "",
    status: "",
    createdAs: new Date(),
  });
  let ModalCreateGift = null;
  if (modalCreateGift) {
    ModalCreateGift = (
      <Modal2
        onClose={() => {
          setModalCreateGift(false);
        }}
        gift={newGift}
        setNewGift={setNewGift}
        onSubmit={(newGift) => {
          const getNewGift = {
            ...newGift,
            id: new Date().getTime(),
            createdAt: new Date(),
          };
          store.setListGift([...store.listGift, getNewGift]);
        }}
      ></Modal2>
    );
  }
  const openModalCreateGift = () => {
    setModalCreateGift(true);
  };
  //

  //
  const [modal, setModal] = useState({
    open: false,
    data: null,
  }); //thay vì để true, false ta đổi thành object
  let viewModal = null;
  const [modalIndex, setModalIndex] = useState();
  if (modal.open) {
    //nếu modal tồn tại (true)
    viewModal = (
      <Modal
        gift={modal.data}
        index={modalIndex}
        onCloseModal={() => {
          setModal({
            one: false,
            data: null,
          });
        }}
      ></Modal>
    );
  }
  return (
    <div className="pageHobbies">
      {/* <Modal2></Modal2> */}
      {ModalCreateGift}
      {viewModal}
      {/* <Modal></Modal> */}
      <div className="section">
        <LikeNow></LikeNow>
        <Filter></Filter>
      </div>
      <div className="content">
        <Create openModal2={openModalCreateGift}></Create>
        <div className="giftList">
          {/* Truyền data cho các component GiftItem
          {/* vì setModal là 1 hàm state   */}
          {store.listGift
            // .sort((a, b) => {
            //   // Sắp xếp theo ngày thêm vào
            //   return a.createdAt.getTime() - b.createdAt.getTime();
            // })
            .map((item, idx) => {
              return (
                <div class={`div${idx + 1}`}>
                  <Giftitem
                    gift={item}
                    onOpenModal={setModal}
                    setModalIndex={setModalIndex}
                    index={idx}
                  ></Giftitem>
                </div>
              );
            })}
        </div>
        <Pagination></Pagination>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Listing;

//Lesson9: xóa sản phẩm:
//Xóa 1 phần tử của mảng
// splice: vị trí, số phần tử bị xóa -> thay đổi mảng ban đầu
// khi ta thay đổi dữ liệu mảng, state k thay đổi nên ta dùng hàm set state
//B1: Khi kích vào nút thùng rác => in ra id sản phẩm, vị trí sản phầm trong mảng ban đầu
//B2: xóa phần tử = splice(index,1)
