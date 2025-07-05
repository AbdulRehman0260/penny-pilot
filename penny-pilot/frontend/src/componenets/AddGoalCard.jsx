import React, { useState } from "react";
import { useGoalStore } from "../store/useGoalStore.js";

const AddGoalCard = () => {
  const { closeGoalForm, submitGoal } = useGoalStore();

  const [goalFormData, setGoalFormData] = useState({
    title: "",
    description: "",
    targetAmount: 0,
    currentAmount: 0,
    targetDate: "",
    priority: "Medium",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitGoal(goalFormData);
  };

  return (
    <div className="overlay">
      <div className="pop-card">
        <form onSubmit={handleSubmit} className="add-goal-form-container">
          <div className="add-goal-form-input">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Enter you goal title here"
              value={goalFormData.title}
              onChange={(e) =>
                setGoalFormData({ ...goalFormData, title: e.target.value })
              }
            />
          </div>
          <div className="add-goal-form-input">
            <label htmlFor="">Description</label>
            <textarea
              rows={4}
              placeholder=""
              value={goalFormData.description}
              onChange={(e) =>
                setGoalFormData({
                  ...goalFormData,
                  description: e.target.value,
                })
              }
            />
          </div>
          <div className="add-goal-form-input">
            <label htmlFor="">Goal Target Amount</label>
            <input
              type="number"
              placeholder="Enter you goal amount here"
              value={goalFormData.targetAmount}
              onChange={(e) =>
                setGoalFormData({
                  ...goalFormData,
                  targetAmount: e.target.value,
                })
              }
            />
          </div>
          <div className="add-goal-form-input">
            <label htmlFor="">Current Amount</label>
            <input
              type="number"
              placeholder="Enter you current amount here"
              value={goalFormData.currentAmount}
              onChange={(e) =>
                setGoalFormData({
                  ...goalFormData,
                  currentAmount: e.target.value,
                })
              }
            />
          </div>
          <div className="add-goal-form-input">
            <label htmlFor="">Target Date</label>
            <input
              type="date"
              placeholder="Enter you Target Date here"
              value={goalFormData.targetDate}
              onChange={(e) =>
                setGoalFormData({
                  ...goalFormData,
                  targetDate: e.target.value,
                })
              }
            />
          </div>
          <div className="add-goal-form-input">
            <label htmlFor="">Priority</label>
            <select
              placeholder="Enter goal priority amount here"
              value={goalFormData.priority}
              onChange={(e) =>
                setGoalFormData({
                  ...goalFormData,
                  priority: e.target.value,
                })
              }
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="form-btn-container">
            <button
              type="button"
              className="form-create-btn"
              onClick={closeGoalForm}
            >
              {" "}
              Cancel
            </button>
            <button type="submit" className="form-create-btn">
              {" "}
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddGoalCard;
