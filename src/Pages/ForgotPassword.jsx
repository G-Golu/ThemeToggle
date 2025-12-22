import { Link } from "react-router-dom";
import "./Auth.css";

const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">

        {/* Tabs (only Sign In active link) */}
        <div className="auth-tabs">
          <Link to="/login" className="tab-link">
            <button className="tab active">Sign In</button>
          </Link>

          <button className="tab" disabled>
            Sign Up
          </button>
        </div>

        <h2>Forgot Password</h2>
        <p className="subtitle">
          Enter your email and we’ll send you a reset link
        </p>

        <form className="auth-form">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your registered email"
          />

          <button className="submit-btn">
            Send Reset Link
          </button>
        </form>

        <p className="forgot">
          Remember your password?{" "}
          <Link to="/login">Back to Sign In</Link>
        </p>

      </div>
    </div>
  );
};

export default ForgotPassword;
