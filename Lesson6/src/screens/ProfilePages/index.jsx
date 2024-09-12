//Bài 10
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="profilePage" style={{ display: "flex", marginTop: "10px" }}>
      <div className="col" style={{ borderRight: "1px solid black" }}>
        <h2>ProfilePage</h2>
        <p>TrungLe</p>
        <p>2003</p>
        <p>HaNoi</p>
      </div>
      <div className="col">
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to={"/profile/about"}>About Us</Link>
          <Link to={"/profile/edit-profile"}>EditProfile</Link>
        </div>
        <div className="content">
          <Outlet></Outlet>
          {/* Tác dụng: xem xem Route nào nằm bên trong Route có path Profile này */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
