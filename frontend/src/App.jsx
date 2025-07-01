import { useEffect, useState } from "react";
import Navbar from "./componenets/Navbar";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import WishListPage from "./pages/WishListPage";
import TransactionsPage from "./pages/TransactionsPage";
import GoalsPage from "./pages/GoalsPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { Loader2 } from "lucide-react";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  console.log(authUser);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="spinner-container">
        <Loader2 className="loading-spinner" />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={authUser ? <DashboardPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route
          path="/wishlist"
          element={authUser ? <WishListPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/transactions"
          element={authUser ? <TransactionsPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/goals"
          element={authUser ? <GoalsPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
