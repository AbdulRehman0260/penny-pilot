import React from "react";
import Sidebar from "../componenets/Sidebar";
import AddGoalCard from "../componenets/AddGoalCard";
import { useGoalStore } from "../store/useGoalStore.js";

const DashboardPage = () => {
  const { showGoalForm, closeGoalForm, submitGoal } = useGoalStore();

  return (
    <div className="dash-page-container">
      <Sidebar />
      {showGoalForm ? <AddGoalCard /> : ""}
    </div>
  );
};

export default DashboardPage;
