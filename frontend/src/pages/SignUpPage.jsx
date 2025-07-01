import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { ImCoinPound } from "react-icons/im";
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import { Eye, EyeOff, Loader2, Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  //show password state

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();
  const validateForm = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sgn-grid-container">
      <div className="sgn-left-box">
        <div className="sgn-box-1">
          <FaRegMessage className="sgn-message-icon" />
          <h1 className="sgn-heading-account">Create Account</h1>
        </div>
        <form onSubmit={handleSubmit} className="sgn-input-form-box">
          <div className="sgn-form-group">
            <label className="sgn-name-label" htmlFor="fullName">
              Full Name
            </label>
            <div className="image-container">
              <div className="icon-container">
                <User className="user-icon" />
              </div>
            </div>
            <input
              type="text"
              name="fullName"
              placeholder="hala a rehman"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>
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
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
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
              value={formData.password}
              placeholder="*****"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
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
            disabled={isSigningUp}
          >
            {isSigningUp ? (
              <>
                <Loader2 className="loading-btn" />
                loading...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>
        <div className="account-container">
          <p className="paragraph-text">
            Already have an account?{" "}
            <Link to="/login" className="login-link">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <div className="sgn-divider"></div>
      <div className="sgn-right-box">
        <ImCoinPound className="sgn-coin" />
        <div className="sgn-text-container">
          <p className="sgn-title">
            Join PennyPilot and take control of your financial future.
          </p>
          <p className="sgn-subtitle">
            {" "}
            Create your free account to start tracking income and expenses,
            setting savings goals, and building better money habits with your
            partner. Get the insights you need to make smarter financial
            decisions together
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
