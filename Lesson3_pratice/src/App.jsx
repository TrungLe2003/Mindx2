import Modal from "./components/Modal";
import { Routes, Route, useParams } from "react-router-dom";
import Listing from "./Listing";
import "./App.css"; //luôn import file css ở cuối cùng

/**
 * Bật tắt Modal
 * Bước 1: khởi tạo 1 state dành cho modal
 * b2: thực hiện tạo 1 biến tương lai lưu trữ modal
 * Kiểm tra nếu trạng thái modal đang mở (true) -> biến trên kia sẽ gắn bằng component modal
 */

function App() {
  return (
    <Routes>
      <Route path="/" element={<Listing></Listing>}>
        <Route path="/:productId" element={<Modal></Modal>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
