import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useGoalStore = create((set) => ({
  showGoalForm: false,
  openGoalForm: () => set({ showGoalForm: true }),
  closeGoalForm: () => set({ showGoalForm: false }),
  submitGoal: async (data) => {
    try {
      const res = await axiosInstance.post("goal/add-goal", data);
      toast.success("Goal added successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ showGoalForm: false });
    }
  },
}));
