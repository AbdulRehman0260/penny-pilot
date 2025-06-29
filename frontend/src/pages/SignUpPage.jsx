import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { ImCoinPound } from "react-icons/im";

const SignUpPage = () => {
  return (
    <div className="grid-container">
      <div className="left-box">
        <div className="box-1">
          <FaRegMessage className="message-icon" />
          <h1 className="heading-account">Create Account</h1>
        </div>
      </div>
      <div className="divider"></div>
      <div className="right-box">
        <ImCoinPound className="coin" />
        <div className="text-container">
          <p className="title">
            Join PennyPilot and take control of your financial future.
          </p>
          <p className="subtitle">
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
