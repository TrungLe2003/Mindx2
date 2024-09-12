//Đây là giới hạn của cái kho (Bài 9)
import Store from "./store";
import { useState } from "react";

const StoreProvider = (props) => {
  const [theme, setTheme] = useState("Dark");
  return (
    <Store.Provider value={{ theme: theme }}>{props.children}</Store.Provider>
  );
};

export default StoreProvider;

//Đặt giới hạn cho Store
//bên trong là các component muốn sử dụng kho này
// Tất cả các dữ liệu (value) hoặc hàm, mà kho cung cấp, thì tất cả các component con đều có thể sử dụng đc
