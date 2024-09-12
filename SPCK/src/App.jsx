import { useState } from "react";
import { Route, Routes, Link, useNavigate, Router } from "react-router-dom";

//
import LogoUdemy from "../public/LogoUdemy";
import CiscoLogo from "../public/CompanyLogo/CiscoLogo";
import SamsungLogo from "../public/CompanyLogo/SamsungLogo";
import VolkLogo from "../public/CompanyLogo/Volklogo";
import HewlettLogo from "../public/CompanyLogo/HewlettLogo";
import VimeoLogo from "../public/CompanyLogo/Vimeologo";
import EricssonLogo from "../public/CompanyLogo/EricssonLogo";
//
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import CourseList from "./component/CourseList";
import CourseDetail from "./component/CourseDetail";
import User from "./component/User";
import HPCourse from "./component/HomePageCourse";
import HomePageFile from "./HomePageFile";
import MainPage from "./MainPage";
//
import YourCourse from "./component/User/yourCourse";
import YourInfor from "./component/User/YourInformation";
import SetInfor from "./component/User/YourInformation/SetInfor";
import SetPW from "./component/User/YourInformation/SetPW";
//

import { userLoggedIn, dataUser } from "./data";
//
import "./App.css";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser(null);
    navigate("/");
  };
  return (
    <p>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              setLogOut={handleLogout}
              loggedInUser={loggedInUser}
            ></MainPage>
          }
        >
          <Route path="/" element={<HomePageFile></HomePageFile>}></Route>
          <Route path="/courseList" element={<CourseList></CourseList>}></Route>
          <Route
            path="/SignIn"
            element={<SignIn setLoggedInUser={setLoggedInUser}></SignIn>}
          ></Route>
          <Route
            path="/SignUp"
            element={<SignUp setLoggedInUser={setLoggedInUser}></SignUp>}
          ></Route>
        </Route>
        <Route path="/user" element={<User></User>}>
          <Route path="/user" element={<YourCourse></YourCourse>}></Route>
          <Route path="/user/yourinfor" element={<YourInfor></YourInfor>}>
            <Route
              path="/user/yourinfor"
              element={<SetInfor></SetInfor>}
            ></Route>
            <Route
              path="/user/yourinfor/changePassWord"
              element={<SetPW></SetPW>}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </p>
  );
};
export default App;
