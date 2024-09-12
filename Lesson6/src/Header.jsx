import { useContext } from "react";
import Store from "./store";

const Header = () => {
  const store = useContext(Store);
  return <h1>Header {store.theme}</h1>;
};

export default Header;
//Header đã nằm trong giới hạn kho rồi, đoạn này dùng để biết Header sử dụng j trong kho
