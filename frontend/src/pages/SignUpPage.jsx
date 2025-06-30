import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { ImCoinPound } from "react-icons/im";

const SignUpPage = () => {
  return (
    <div className="sgn-grid-container">
      <div className="sgn-left-box">
        <div className="sgn-box-1">
          <FaRegMessage className="sgn-message-icon" />
          <h1 className="sgn-heading-account">Create Account</h1>
        </div>
        <div className="sgn-input-form-box">
          <div className="sgn-form-group">
            <label className="sgn-name-label" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="sgn-form-group">
            <label className="sgn-name-label" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              name="Email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="sgn-form-group">
            <label className="sgn-name-label" htmlFor="password">
              Password
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="sgn-create-btn">
            Create Account
          </button>
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
