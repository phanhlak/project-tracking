import { Link } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  return (
    <div className="login-page">
      <h1 className="logo">
        PROJECT <span>TRACK</span>ING SYSTEM
      </h1>

      <p className="tagline">
        “ The project tracking system will be a centralized system that
        collects project information. ”
      </p>

      <div className="login-box">
        <label>user</label>
        <input type="text" />

        <div className="password-row">
          <label>password</label>
          <a href="#" className="forgot">forgot password ?</a>
        </div>
        <input type="password" />

        <div className="remember-container">
  <input type="checkbox" id="remember" />
  <label htmlFor="remember">remember me</label>
</div>


        <button className="login-btn">Login</button>
      </div>

      <p className="signup-text">
        Don’t have an account ? <Link to="/signup">Sign up</Link>
      </p>

      <div className="footer-logo">🏫</div>
    </div>
  );
}
