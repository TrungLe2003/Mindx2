import { useState } from "react";
import { dataUser } from "../../data";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const SignUp = ({ setLoggedInUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }
    const existingUser = dataUser.find((item) => item.username === username);
    if (existingUser) {
      alert("Tên đăng nhập đã tồn tại");
      return;
    } else {
      const newUser = { username, password };
      dataUser.push(newUser);
      // setLoggedInUser(newUser.username); // Cập nhật trạng thái đăng nhập
      navigate("/SignIn");
    }
  };
  return (
    <div className="SignUp">
      <div className="form-signUp">
        <h1>Chào mừng bạn tới Udemy</h1>
        <div className="wcBack">Đăng ký để tham giác các khóa học ngay.</div>
        <form action="" onSubmit={handleSubmit}>
          <div className="account">Tài khoản</div>
          <input
            className="account"
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div className="password">Mật khẩu</div>
          <input
            className="password"
            placeholder="Mật khẩu"
            type="text"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="password">Xác nhận mật khẩu</div>
          <input
            className="password"
            placeholder="Mật khẩu"
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            required
          />
          <br />
          <button className="submitBtn" type="submit">
            Đăng ký
          </button>
        </form>
        <div className="otherSignin">
          <div>
            <img src="/public/CompanyLogo/FacebookLogo.png" alt="" />
            <button>Đăng nhập bằng facebook</button>
          </div>

          <div>
            <img src="/public/CompanyLogo/ggLogo.png" alt="" />
            <button type="submit">Đăng nhập bằng google</button>
          </div>
        </div>
        <p class="text">
          <span>Bạn đã có tài khoản?</span>
          <span>Đăng Nhập</span>
        </p>
      </div>
      <div>
        <img src="/src/component/SignIn/signIn.jpg" alt="" />
      </div>
    </div>
  );
};

export default SignUp;
