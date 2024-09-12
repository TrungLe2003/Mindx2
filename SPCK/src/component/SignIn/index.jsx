import { dataUser } from "../../data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
const SignIn = ({ setLoggedInUser }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = dataUser.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setLoggedInUser(user.username);
      navigate("/");
    } else {
      alert("Tài khoản không tồn tại");
      return;
    }
  };
  return (
    <div className="SignIn">
      <div className="form-signIn">
        <h1>Chào mừng trở lại</h1>
        <div className="wcBack">
          Chào mừng trở lại! Hãy nhập thông tin của bạn.
        </div>
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <br />
          <button className="submitBtn" type="submit">
            Đăng nhập
          </button>
        </form>
        <div className="otherSignin">
          <div>
            <img src="/public/CompanyLogo/FacebookLogo.png" alt="" />
            <button>Đăng nhập bằng facebook</button>
          </div>

          <div>
            <img src="/public/CompanyLogo/ggLogo.png" alt="" />
            <button>Đăng nhập bằng google</button>
          </div>
        </div>
        <p class="text">
          <span>Bạn chưa có tài khoản?</span>
          <a href="" class="text-link">
            <span>Đăng Ký</span>
          </a>
        </p>
      </div>
      <div>
        <img src="/src/component/SignIn/signIn.jpg" alt="" />
      </div>
    </div>
  );
};

export default SignIn;
