import { Link } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">

        {/* Tabs */}
        <div className="auth-tabs">
          <Link to="/login" className="tab-link">
            <button className="tab">Sign In</button>
          </Link>

          <button className="tab active">Sign Up</button>
        </div>

        <h2>Create account</h2>

        <form className="auth-form">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" />

          <label>Email</label>
          <input type="email" placeholder="Enter email" />

          <label>Password</label>
          <input type="password" placeholder="Enter password" />

          <button className="submit-btn">Sign Up</button>
        </form>

      </div>
    </div>
  );
};

export default Signup;
