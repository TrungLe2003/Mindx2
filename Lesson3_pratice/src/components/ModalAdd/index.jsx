import "./style.css";

const Modal2 = (props) => {
  const handleChange = (e) => {
    props.gift[e.target.name] = e.target.value;
    //  console.log(e.target.name);
    // console.log(e.target.value);
    props.setNewGift({ ...props.gift });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.gift);
    props.onSubmit(props.gift);
    props.onClose();
  };
  return (
    <div className="modalAdd">
      <div className="content">
        <div className="header">
          <h1>Quà tặng</h1>
          <div className="closeModal" onClick={props.onClose}>
            X
          </div>
        </div>
        <form action="" onSubmit={handleSubmit} className="modalAdd">
          <div className="row">
            <label htmlFor="name">Tên sản phẩm</label>
            <input
              type="text"
              id="name"
              name="name"
              value={props.gift.name}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <label htmlFor="image">Hình ảnh</label>
            <input
              type="text"
              id="image"
              name="image"
              value={props.gift.image}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              id="rating"
              name="rating"
              value={props.gift.rating}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <label htmlFor="price">Giá</label>
            <input
              type="text"
              id="price"
              name="price"
              value={props.gift.price}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <label htmlFor="saleOff">Giảm giá</label>
            <input
              type="text"
              id="saleOff"
              name="saleOff"
              value={props.gift.saleOff}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label htmlFor="status">Trạng thái</label>
            <input
              type="text"
              id="status"
              name="status"
              value={props.gift.status}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label htmlFor="type">Phân loại</label>
            <input
              type="text"
              id="type"
              name="type"
              value={props.gift.type}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <label htmlFor="category">Danh mục</label>
            <input
              type="text"
              id="category"
              name="category"
              value={props.gift.category}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <label htmlFor="describe">Mô tả</label>
            <input
              type="text"
              id="describe"
              name="describe"
              value={props.gift.describe}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <label htmlFor="">Ngày thêm</label>
            <input type="text" />
          </div>
          <button className="btn-save">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Modal2;
