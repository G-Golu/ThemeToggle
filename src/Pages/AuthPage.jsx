import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ForgotPassword from "../components/ForgotPassword";
import Success from "../components/Success";
import "../styles/auth.css";

function AuthPage() {
  const [page, setPage] = useState("signin");

  return (
    <div className="auth-page">
      {page === "signin" && <SignIn setPage={setPage} />}
      {page === "signup" && <SignUp setPage={setPage} />}
      {page === "forgot" && <ForgotPassword setPage={setPage} />}
      {page === "success" && <Success setPage={setPage} />}
    </div>
  );
}

export default AuthPage;
