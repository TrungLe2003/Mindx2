// Khi ta trỏ vào 1 thư mục bất kì, nó sẽ tự độg lấy file index.jsx
//C2 cho hình ảnh vô: giả sử ảnh banner ở trong folder assets
//import banner from '../../assets/banner.png'
import "./styles.css";
const LikeNow = () => {
  return (
    <div className="likeNow">
      <h1 className="titleLikeNow">Yêu thích ngay</h1>
      <div className="banner">
        <img src="/public/banner.png" alt="" />
        {/* <img src={banner} alt="" /> */}
        <p>
          Thêm ngay vào mục yêu thích để nhận được thông báo mỗi khi sản phẩm có
          ưu đãi
        </p>
      </div>
    </div>
  );
};
export default LikeNow;
