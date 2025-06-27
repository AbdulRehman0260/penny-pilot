import mongoose from "mongoose";
import Goal from "../models/goal.models.js";

export const addGoal = async (req, res) => {
  const loggedInUserId = req.user._id;
  const { title, description, targetAmount, targetDate, priority } = req.body;

  try {
    if (!title || !description || !targetAmount || !targetDate) {
      return res.status(400).json({ message: "All fields must be filled" });
    }
    if (isNaN(targetAmount) || Number(targetAmount) <= 0) {
      return res.status(400).json({ message: "Invalid amount entered" });
    }
    if (title.length > 60 || description.length > 200) {
      return res
        .status(400)
        .json({ message: "Text entered exceeds the character limit" });
    }
    if (typeof title !== "string" || typeof description !== "string") {
      return res.status(400).json({ message: "Invalid input type" });
    }

    const priorityTypes = ["low", "medium", "high"];

    if (!priorityTypes.includes(priority.toLowerCase())) {
      return res.status(400).json({ message: "Invalid priority type entry" });
    }
    const goalData = {
      userId: loggedInUserId,
      title,
      description,
      targetAmount,
      targetDate: new Date(req.body.targetDate),
      priority,
    };
    const newGoal = new Goal(goalData);
    //save the database
    await newGoal.save();
    res.status(201).json({
      title: newGoal.title,
      description: newGoal.description,
      targetAmount: newGoal.targetAmount,
      targetDate: newGoal.targetDate,
      priority: newGoal.priority,
    });
  } catch (error) {
    console.error("Error creating goal:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteGoal = async (req, res) => {
  try {
    const goalId = req.params.id;
    await Goal.findByIdAndDelete(goalId);
    res.status(200).json({ message: "Deleted goal successfully" });
  } catch (error) {
    res.status(500).json({ message: "Could not fetch goals" });
  }
};

export const getGoals = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const userGoals = await Goal.find({
      userId: { $eq: loggedInUserId },
    });
    res.status(200).json(userGoals);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch goals" });
  }
};

export const updateGoal = async (req, res) => {
  try {
    const updated = await Goal.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Goal not found" });
    }

    res.status(200).json({ message: "Goal updated successfully", updated });
  } catch (error) {
    console.log("Error in updating fields");
    res.status(500).json({ message: "Internal server error" });
  }
};
