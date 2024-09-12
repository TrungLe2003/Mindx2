import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card.jsx";

function Hello() {
  return <h1>Xin Chao</h1>;
}

const ComponentA = () => {
  const handleClickBtn = () => {
    console.log("Hello");
  };
  return <button onClick={handleClickBtn}>Click here</button>;
};

function App() {
  const age = 10;
  // const styleH1 {
  //   color: 'red',
  //   backgroundColor: 'blue',
  // }
  const onClick = () => {
    console.log("Chào bạn");
  };
  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "blue" }}>
        Hello TrungLe {age}
      </h1>
      {/* Cách sử dụng component */}
      <ComponentA></ComponentA>
      <Hello></Hello>
      <Card name="Macbook" price={100000000} abc={onClick}>
        <div>Tôi là 1 thẻ bên trong children</div>
      </Card>
      <Card name="Thinkpad" price={500000}></Card>
      <Card name="Lenovo" price={2500000}></Card>
    </div>
  );
}

export default App;
