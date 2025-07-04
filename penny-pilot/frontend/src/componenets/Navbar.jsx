import React from "react";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { authUser, logout } = useAuthStore();

  if (authUser) {
    return (
      <div className="navbar-container">
        <button
          className="navbar-btn"
          type="button"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div className="navbar-container">
        <button className="navbar-btn" type="button" onClick={() => {}}>
          test
        </button>
      </div>
    );
  }
};

export default Navbar;
