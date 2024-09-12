// //Bài 4
// import Card from "./Card";
// //props luôn là 1 object
// //mỗi key truyền attribute sẽ là 1 key của object này, giá trị sẽ là giá trị được truyền trên thẻ
// //props sẽ có key là name, giá trị là TrungLe
// //do props là giá trị đầu vào nên không được phép thay đổi
// const ComponentA = (props) => {
//   console.log(props);

//   const age = 10;
//   const handleClickBtn = () => {
//     console.log("Hello");
//   };
//   return (
//     <div className="componentA">
//       <h1 style={{ color: "blue", backgroundColor: "purple" }}>
//         Hello TrungLe
//       </h1>
//       <button onClick={handleClickBtn}>Click here</button>
//     </div>
//   );
// };

// function App() {
//   const age = 10;
//   //cách gán hàm 2
//   const onClick = () => {
//     console.log("đây là cách gán hàm2");
//   };
//   return (
//     <div>
//       <h1>Hello mọi người, tôi năm nay {age} tuổi</h1>
//       <ComponentA name="TrungLe"></ComponentA>
//       {/* khi ta truyền 1 giá trị (attribute) lên thẻ
//       lúc này, tất cả attribute nhận tham số đầu vào là 1 props */}
//       <Card
//         name="Iphone"
//         price="1000"
//         // abc={() => {
//         //   console.log("Đây là cách gán hàm 1");
//         // }}
//         abc={onClick} //nếu ta để def = {onClick()} nghĩa là gọi hàm, chỉ chạy đc 1 lần khi chạy web
//       >
//         <h1>tôi là 1 thẻ bên trong Card</h1>
//         {/* h1 là props.children */}
//       </Card>
//       <Card name="Samsung" price="999"></Card>
//       <Card name="Nokia" price="888"></Card>
//     </div>
//   );
// }

// export default App;

//Bài 5:
//Bản chất của react là chỉ đọc component 1 lần

// import { useState } from 'react';
// function App() {
//   // giá trị index 0 là giá trị hiện tại của state
//   // giá trị index 1 là hàm cập nhật giá trị
//   // khi sử dụng hàm cập nhật giá trị state -> component sẽ bắt buộc tính toán lại và có thể thay đổi giá trị
//   const [count, setCount] = useState(0);
//   console.log(count);
//
//   const handleIncre = () => {
//     // xử lý cập nhật state
//     // bên trong lời gọi hàm này, sẽ truyền 1 giá trị 'mới'
//     // khi nhận vào 1 giá trị mới -> react tiến hành so sánh giá trị mới và giá trị cũ xem có khác nhau hay không
//     // nếu khác thì mới tiến hành cập nhật re-render, nếu không thì không làm gì
//     setCount(count + 1); //cập nhật giá trị mới
//   };
//   return (
//     <div className="app">
//       <p>Đếm: {count}</p>
//       <button onClick={handleIncre}>Click</button>
//     </div>
//   );
// }
// export default App;

// //xét trường hợp
// import { useState } from "react";
// const App = () => {
//   const [person, setPerson] = useState({ name: "MindX", age: 10 });
//   const increaseAge = () => {
//     person.age = person.age + 1;
//     //cập nhật
//     const newDataPerson = {
//       ...person,
//     };
//     console.log(person);

//     setPerson(newDataPerson);
//   };
//   /**
//    * Kiểm tra nếu tuổi >= 15, hiển thị ra màn hình là vị thành niên
//    *
//    */
//   let viewText = "";
//   if (person.age >= 15) {
//     viewText = "Vị thành niên";
//   }
//   return (
//     <div>
//       {viewText}
//       <p>
//         Hello! I'm {person.name}. I'm {person.age} years old.
//       </p>
//       <button onClick={increaseAge}>Increase age</button>
//     </div>
//   );
// };
// export default App;

// //ta thấy dù đã bấm vào button nhưng giao diện trang web vx không thay đổi
// //Lí do là vì dù đã thay đổi giá trị nhưng cả dữ liệu mới và cũ đều chỉ vào 1 địa chỉ tham chiếu, nên dữ liệu không đổi

// import { useState } from "react";
// const App = () => {
//   // true: sáng, false: tối
//   const [theme, setTheme] = useState(true);
//   /**
//    * Kiểm tra nếu tuổi >= 15 thì hiển thị ra màn hình là vị thành niên
//    *
//    */
//   const handleSetTheme = () => {
//     setTheme(!theme);
//   };
//   // mặc định giá trị cho theme sáng
//   let styleTheme = {
//     backgroundColor: "white",
//     color: "black",
//   };
//   let currTheme = !theme ? "Light" : "Dark";
//   if (!theme) {
//     styleTheme = {
//       backgroundColor: "black",
//       color: "white",
//     };
//   }
//   return (
//     <div>
//       <p style={styleTheme}>Hello! I'm MindX. 10 years old.</p>
//       <button onClick={handleSetTheme}>Change theme {currTheme}</button>
//     </div>
//   );
// };
// export default App;
