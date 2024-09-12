import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import StoreProvider from "./Store.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);

// B10:
//B1 cài đặt Browser với url param
// lấy được giá trị được truyền
// từ giá trị đấy tìm kiếm thông tin cụ thể sản phẩm
