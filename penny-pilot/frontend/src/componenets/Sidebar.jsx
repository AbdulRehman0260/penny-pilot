import React from "react";
import { CirclePlus, Pencil, Trash } from "lucide-react";
import { useGoalStore } from "../store/useGoalStore.js";

const Sidebar = () => {
  const { openGoalForm } = useGoalStore();

  return (
    <div className="sidebar-container">
      <div className="goal-btn-container">
        <div className="sidebar-btn" onClick={openGoalForm}>
          <CirclePlus />
          <button className="add-goal-btn" onClick={openGoalForm}>
            {" "}
            Goal
          </button>
        </div>
        <div className="sidebar-btn">
          <Pencil />
          <button className="add-goal-btn"> Goal</button>
        </div>
        <div className="sidebar-btn">
          <Trash />
          <button className="add-goal-btn"> Goal</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
