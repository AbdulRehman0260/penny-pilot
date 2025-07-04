import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { ImCoinPound } from "react-icons/im";
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import { Eye, EyeOff, Loader2, Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoggingIn, login } = useAuthStore();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  //validation of input data
  const validateForm = () => {
    if (!loginFormData.email.trim()) {
      return toast.error("email is required");
    }
    if (!/\S+@\S+\.\S+/.test(loginFormData.email)) {
      return toast.error("Invalid email format");
    }

    if (!loginFormData.password) {
      return toast.error("password is required");
    }

    if (loginFormData.password.length < 8) {
      return toast.error("password must be atleast 8 characters");
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();

    if (success === true) {
      login(loginFormData);
    }
  };

  return (
    <div className="sgn-grid-container">
      <div className="sgn-left-box">
        <div className="sgn-box-1">
          <FaRegMessage className="sgn-message-icon" />
          <h1 className="sgn-heading-account">Welcome back to PennyPilot</h1>
        </div>
        <form onSubmit={handleSubmit} className="sgn-input-form-box">
          <div className="sgn-form-group">
            <label className="sgn-name-label" htmlFor="email">
              Email
            </label>{" "}
            <div className="image-container">
              <div className="icon-container">
                <Mail className="user-icon" />
              </div>
            </div>
            <input
              type="text"
              name="Email"
              placeholder="hala@gmail.com"
              value={loginFormData.email}
              onChange={(e) =>
                setLoginFormData({ ...loginFormData, email: e.target.value })
              }
            />
          </div>
          <div className="sgn-form-group-p">
            <label className="sgn-name-label" htmlFor="password">
              Password
            </label>{" "}
            <div className="image-container">
              <div className="icon-container">
                <Lock className="user-icon" />
              </div>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={loginFormData.password}
              placeholder="*****"
              onChange={(e) =>
                setLoginFormData({ ...loginFormData, password: e.target.value })
              }
            />
            <button
              className="password-btn"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Eye className="eye" />
              ) : (
                <EyeOff className="eye-off" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="sgn-create-btn"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="loading-btn" />
                loading...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <div className="account-container">
          <p className="paragraph-text">
            Dont have an account yet?{" "}
            <Link to="/signup" className="login-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="sgn-right-box">
        <ImCoinPound className="sgn-coin spin" />
        <div className="sgn-text-container">
          <p className="sgn-title">
            Log in to manage your finances and stay on top of your goals.
          </p>
          <p className="sgn-subtitle">
            {" "}
            Access your dashboard to track expenses, update your savings plans,
            and make smarter financial decisions. Your progress and insights are
            always just one click away — let’s keep building better money habits
            together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
