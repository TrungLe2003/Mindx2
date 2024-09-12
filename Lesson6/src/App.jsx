// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// /**
//  *
//  * Thay vì tư tưởng lấy giá trị từ ô input
//  *
//  *
//  * -> Lấy dữ liệu  để đưa cho thẻ input hiển thị
//  * Chính vì ô input lấy giá trị (dữ liệu) từ component, cho nên nó không có khả năng tự thay đổi giá trị
//  *
//  */
// function App() {
//   const [valueEmail, setValueEmail] = useState("khoa@cijs98.mindx.com");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(valueEmail);
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>Email:</label>
//         <input
//           placeholder="Nhập email"
//           value={valueEmail}
//           onChange={(e) => {
//             setValueEmail(e.target.value);
//           }}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }
// export default App;
// import { useState } from "react";
// const App = () => {
//   const [input, setInput] = useState("");
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(input);
//     setInput("");
//   };
//   const handleInputChange = (event) => {
//     setInput(event.target.value);
//   };
//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <input type="text" value={input} onChange={handleInputChange} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default App;

// import { useState } from "react";
// import Input from "./Input";
// const App = () => {
//   const [input, setInput] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(input);
//     setInput("");
//   };
//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };
//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <input type="text" value={input} onChange={handleInputChange} />
//       <p>input từ component Input</p>
//       <Input value={input} handleChange={handleInputChange}></Input>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default App;

//--------------------Bài 7------------
// import { useState } from "react";
// import Say from "./Say";
// import "./App.css";
// function App() {
//   const [newText, setNewText] = useState("");
//   const [listText, setListText] = useState([
//     "Xin chào mindx-er",
//     "Tạm biệt bé ngủ ngon",
//     "bé lên 3",
//     "Cháu đi mẫu giáo",
//   ]);
//   const handleAdd = () => {
//     listText.push(newText);
//     setListText([...listText]);
//   };
//   return (
//     <>
//       <div>
//         <input
//           value={newText}
//           onChange={(e) => {
//             setNewText(e.target.value);
//           }}
//         />{" "}
//         <button onClick={handleAdd}>Add</button>
//       </div>
//       {listText.map((item) => {
//         return <Say text={item} />;
//       })}
//     </>
//   );
// }
// export default App;
// import { useState } from "react";
// import Say from "./Say";
// const App = () => {
//   const [newText, setNewText] = useState("");
//   const [searchText, setSearchText] = useState("");
//   //const hiList = [<Say text={"Chào"} />, <Say text={"Bye"} />];
//   //const listText = ["xin chào", "tạm biệt", "ngủ ngon", "tôi là Trung"]; // giờ ta dùng map để truyền từng giá trị vào component Say
//   //cập nhật
//   const [listText, setListText] = useState([
//     "xin chào",
//     "tạm biệt",
//     "ngủ ngon",
//     "tôi là Trung",
//     "Hello",
//   ]);
//   // const listRender = listText.map((item) => { //C1
//   //   return <Say text={item}></Say>;
//   // });
//   const handleAdd = () => {
//     listText.push(newText);
//     console.log(newText);
//     console.log(listText);
//     setNewText("");
//     setListText([...listText]);
//   };
//   return (
//     <>
//       {/* {hiList} */}
//       {/* Giả sử 1 ô input để khi nhập vào button sẽ hiển thị thêm trong list */}
//       <input
//         type="text"
//         value={newText}
//         onChange={(e) => {
//           setNewText(e.target.value);
//         }}
//       />
//       <button onClick={handleAdd}>Add text</button>
//       <hr />
//       <input
//         type="text"
//         placeholder="Tìm kiếm"
//         value={searchText}
//         onChange={(e) => {
//           setSearchText(e.target.value);
//         }}
//       />
{
  /* khi bấm nút vẫn chưa cập nhật giao diện nếu k có hook cho listText, vậy nên react chưa coi listText là quan trọng */
}
{
  /* {listRender} C1 */
}
{
  /* {listText.map((item) => {
        return <Say text={item}></Say>;
      })}{" "}
      C2 */
}
{
  /* Ta dùng filter để lọc ra cái ta muốn tìm kiếm, Vdu: */
}
{
  /* {listText
        .filter((item) => {
          return item.includes(searchText); //
        })
        .map((item) => {
          return <Say text={item}></Say>;
        })}
    </>
  );
};

export default App; */
}

// // Key trong react
// import React from "react";

// const App = () => {
//   const [hobbies, setHobbies] = React.useState([
//     {
//       id: 1,
//       hobby: "📷",
//     },
//     {
//       id: 2,
//       hobby: "🎹",
//     },
//   ]);

//   const deleteHobby = (hobbyId) => {
//     const updatedhobbies = hobbies.filter((item) => item.id !== hobbyId);
//     setHobbies(updatedhobbies);
//   };

//   return (
//     <div>
//       <h1>Rate your hobbies !</h1>
//       {hobbies.map((item, index) => (
//         <li key={item.id}>
//           {/* ta để key ở thẻ bên ngoài cùng, thường ta sử dụng id của dữ liệu để làm */}
//           I
//           <select>
//             <option>likes</option>
//             <option>loves</option>
//           </select>
//           {item.hobby}
//           <button onClick={() => deleteHobby(item.id)}>X</button>
//         </li>
//       ))}
//     </div>
//   );
// };

// export default App;

// ///////////////// Render theo điều kiện
// import {useState} from 'react'

// const App = () => {

// 	const [isLoggedIn, setIsLoggedIn] = useState(false)

// 	return (
// 		<div>
//       {/* sử dụng  toán tử 3 ngôi */}
// 			{isLoggedIn
// 				? <button onClick={() => {setIsLoggedIn(false)}}>Logout</button>
// 				: <button onClick={() => {setIsLoggedIn(true)}}>Login</button>
// 			}
// 		</div>
// 	)
// }

// //C2 &&
// import { useState } from "react";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return <div>{!isLoggedIn && <button>Login</button>}</div>;
//   //Giá trị đứng sau sẽ được render nếu giá trị trước là truthy
// };
// export default App;

//---------------------------Bài 8-------------
//Side effect: Sau khi giao diện được render hoặc re-render, thì side effect sẽ được thực thi
//(side effect phản ánh lên sự thay dổi của giao diện)
//Vdu; khi ta vừa truy cập 1 trang web (mới vô sẽ không hiển thị dữ liệu, phải lên server để lấy dữ liệu về), trang web sẽ hiển thị Loading...

//I)
// import { useState } from "react";

// function App() {
//   const [data, setData] = useState(null);
//   //vừa vô data không có, sẽ hiển thị loading
//   /**
//    * Sau khi component đc render xong
//    * thực hiện kiểm tra data
//    * Nếu data không có -> thì hiển thị Loading
//    * .....sau đó thực hiện lấy data
//    *
//    *
//    *
//    * useEffect được ứng dụng trong trg hợp => giao diện được thay đổi trạng thái hiển thị tức render hoặc re-render
//    *
//    */
//   return <>{!data && <p>Loading...</p>}</>;
// }

// export default App;

//II) Ứng dụng useEffect
//useEffect phải viết trước return
//useEffect có 2 tham số (call back function và)
// Vdu;
// import { useState, useEffect } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(count);
//     //sau khi component đc render hoặc re-render, useEffect đc thực thi
//     document.title = `You clicked ${count} time`;
//   });
//   //   //Tham số thứ 2 của useEffect
//   //   /**
//   //    * Dependencies: hiểu đơn giản, ta truyền các state vào mảng đó, khi mà state đó thay đổi, useEffect mới được thực thi
//   //    *TH1: nếu k truyền state nào mà có mảng rỗng, useEffect k thay đổi ngoài render lần đầu
//   //    *Th2: chỉ thay đổi nếu state đc truyền vào thay đổi
//   //    *TH3: không truyền tham số thứ 2, cứ render hoặc re-render là useEffect thực thi
//   //    *
//   //    */
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// };

// export default App;

//Vdu lấy dữ liệu từ API đơn giản
// import { useState, useEffect } from "react";
// const App = () => {
//   const [todo, setTodo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   console.log(todo);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((rs) => rs.json())
//       .then((data) => {
//         setTodo(data);
//         setLoading(false);
//       });
//   }, []);
//   //Tham số thứ 2 của useEffect
//   /**
//    * Dependencies: hiểu đơn giản, ta truyền các state vào mảng đó, khi mà state đó thay đổi, useEffect mới được thực thi
//    *TH1: nếu k truyền state nào mà có mảng rỗng, useEffect k thay đổi ngoài render lần đầu
//    *Th2: chỉ thay đổi nếu state đc truyền vào thay đổi
//    *TH3: không truyền tham số thứ 2, cứ render hoặc re-render là useEffect thực thi
//    *
//    */
//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : todo.map((item, idx) => {
//           return <p>{item.username}</p>;
//         }) ? (
//         todo
//       ) : (
//         <p>Không có dữ liệu</p>
//       )}
//     </div>
//   );
// };

// export default App;

//side effect với clean up function:
//hiểu giống việc đăng ký và hủy đăng ký, sau khi hủy đăng ký 1 kênh youtube, ta sẽ k nhận tbao từ kênh đó nữa
//clean up cx vậy, sau khi component đc re-render hoặc gỡ khỏi màn hình, thì clean up mới chạy
// import { useState, useEffect } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // console.log(count); //ta thấy cleanup Function đc đọc xong mới tới đoạn này

//     // document.title = `You clicked ${count} time`;
//     // return () => {
//     //   console.log("clean up function được đọc");
//     // };
//     //khi component bị unmounted (gỡ khỏi DOM, xoá khỏi DOM, gỡ khỏi màn hình), thì cần phải huỷ logic đã đăng ký với browser
//     //vdu ứng dụng cleanup Function
//     const idInterval = setInterval(() => {
//       setCount(count + 1);
//     }, 1000);
//     //ta thấy, nếu k có cleanup  function, các hàm setInterval sẽ chồng chất lên nhau, không đc xóa, sẽ chạy không ổn định
//     return () => {
//       clearInterval(idInterval);
//     };
//   }, [count]);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// };

// export default App;

//-----------------------------------------Bài 9: context
//Mong muốn đưa tất cả các component cần dùng chung state vào 1 chỗ
//Ta cần có 1 nhà kho, để tất cả các component cần sử dụng, vdu themeContext
//Ta cần giới hạn của nhà kho (vì không phải ai cx sử dụng đc)
//Giờ ta cho cả Header và Footer theme
//ngoài cách sử dụng props, ta sẽ sử dụng context
//ta bọc tất cả trong giới hạn của kho

// import Header from "./header";
// import Footer from "./Footer";
// import StoreProvider from "./StoreProvider";

// function App() {
//   return (
//     <StoreProvider>
//       <Header></Header>
//       <p>Bài 9 </p>
//       <Footer></Footer>
//     </StoreProvider>
//   );
// }
// export default App;

//-------------------------------------------Bài 10: Rounting
// import { Route, Routes, Link } from "react-router-dom";
// import HomePage from "./screens/home";
// import AboutUsPage from "./screens/about-us";
// import ProfilePage from "./screens/ProfilePages";
// import EditProfile from "./screens/ProfilePages/editprofile";
// import AboutUs from "./screens/ProfilePages/about";
// import NotFound from "./screens/404";
// function App() {
//   /**
//    * Route lồng nhau
//    *  giả sử trong Homepage hiện component Profile
//    *    trong Profile lại có 2 component khác thay đổi khi ta bấm vào link
//    *
//    *
//    */
//   return (
//     <div>
//       <header>
//         <div>This is header</div>
//         {/* Component Link */}
//         <div>
//           <Link to={"/"}>HomePage</Link>
//           <Link to={"/about-us"}>About Us</Link>
//         </div>
//       </header>
//       {/* Component Routes sẽ bọc Route */}
//       <Routes>
//         <Route path={"/"} element={<HomePage></HomePage>}></Route>
//         <Route path={"/about-us"} element={<AboutUsPage></AboutUsPage>}></Route>
//         <Route path={"/profile"} element={<ProfilePage></ProfilePage>}>
//           {/* Route lồng nhau */}
//           <Route path={"about"} element={<AboutUs></AboutUs>}></Route>
//           <Route
//             path={"edit-profile"}
//             element={<EditProfile></EditProfile>}
//           ></Route>
//           {/* ta thấy route lồng nhau k thể tự hiển thị luôn, ta cần sử dụng component Outlet */}
//         </Route>
//         <Route path="*" element={<NotFound></NotFound>}></Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;
//------------------------------------------Bài 11: HTTP
//Giúp server và client kết nối với nhau
// import { useState, useEffect } from "react";

// const App = () => {
//   const [listData, setListData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   // const handleCallAPIPokemon = () => {
//   //   setLoading(true);
//   //   fetch("https://pokeapi.co/api/v2/pokemon").then((response) => {
//   //     response.json().then((data) => {
//   //       setListData(data.result);
//   //       setLoading(false);
//   //     });
//   //   });
//   // };
//   const handleCallAPIPokemon = () => {
//     setLoading(true);
//     fetch("https://pokeapi.co/api/v2/pokemon").then((response) => {
//       response.json().then((data) => {
//         setListData(data.results);
//         setLoading(false);
//       });
//     });
//   };
//   return (
//     <>
//       {loading && <p>Loading...</p>}
//       <button onClick={handleCallAPIPokemon}>Lấy data Pokemon</button>
//       {listData
//         ? listData.map((item) => {
//             return <p>{item.name}</p>;
//           })
//         : -(<p>Chưa có dữ liệu</p>)}
//     </>
//   );
// };

// export default App;
