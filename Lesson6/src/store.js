//Đây  là cái kho (bài 9)
//ta nên khởi tạo object rồi mới truyền vào store
// import { createContext } from "react";
// const initContext = {
//   theme: "Light",
//   langauge: "Vietnamese",
// };
// const Store = createContext(initContext);

// export default Store;

import { createContext } from "react";
const initContext = {
  theme: "Light",
  langauge: "Vietnamese",
};

const Store = createContext(initContext);
export default Store;
