import { Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">

        {/* Toggle Buttons */}
        <div className="auth-tabs">
          <button className="tab active">Sign In</button>
          <Link to="/signup" className="tab-link">
            <button className="tab">Sign Up</button>
          </Link>
        </div>

        <h2>Sign in to your account</h2>
        <p className="subtitle">
          Enter your email and password to access your account
        </p>

        <form className="auth-form">
          <label>User Email</label>
          <input type="email" placeholder="Enter email" />

          <label>Password</label>
          <input type="password" placeholder="Enter password" />

          <button className="submit-btn">Sign In</button>
        </form>

        <p className="forgot">
          Do you have forget your password ?{" "}
          <Link to="/forgot-password">Click me</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
