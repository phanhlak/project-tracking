import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");

  // เปลี่ยนค่า input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // กด Login
  const handleSubmit = (e) => {
    e.preventDefault();

    // ดึง user จาก localStorage (ที่ signup เก็บไว้)
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("ยังไม่มีบัญชีผู้ใช้ กรุณาสมัครสมาชิก");
      return;
    }

    if (
      form.username === savedUser.username &&
      form.password === savedUser.password
    ) {
      // login สำเร็จ
      if (form.remember) {
        localStorage.setItem("isLogin", "true");
      }

      localStorage.setItem("currentUser", JSON.stringify(savedUser));
      navigate("/dashboard");
    } else {
      setError("Username หรือ Password ไม่ถูกต้อง");
    }
  };

  return (
    <div className="login-container">
      <h1 className="title">PROJECT TRACKING SYSTEM</h1>
      <p className="subtitle">
        The project tracking system will be a centralized system that collects
        project information.
      </p>

      <form className="login-form" onSubmit={handleSubmit}>
        <label>user</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <label>
          password
          <span className="forgot">forgot password ?</span>
        </label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <div className="options">
          <label className="remember">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />
            remember me
          </label>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      <p className="signup-text">
        Don’t have an account ? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
