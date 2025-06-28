import mongoose from "mongoose";
import Wishlist from "../models/wishlist.models.js";

export const addItem = async (req, res) => {
  const loggedInUserId = req.user._id;
  const { itemName, Price, category, priority, notes } = req.body;

  try {
    if (!itemName || !Price || !category) {
      return res.status(400).json({ message: "All fields must be filled" });
    }
    if (isNaN(Price) || Number(Price) <= 0) {
      return res.status(400).json({ message: "Invalid amount entered" });
    }
    if (typeof itemName !== "string" || typeof category !== "string") {
      return res.status(400).json({ message: "Invalid input type" });
    }

    if (req.body.priority) {
      const priorityTypes = ["low", "medium", "high"];

      if (!priorityTypes.includes(priority.toLowerCase())) {
        return res.status(400).json({ message: "Invalid priority type entry" });
      }
    }

    const wishListData = {
      userId: loggedInUserId,
      itemName,
      Price,
      category,
      notes,
      priority,
    };
    const newWishlistItem = new Wishlist(wishListData);
    //save the database
    await newWishlistItem.save();
    res.status(201).json({
      itemName: newWishlistItem.itemName,
      Price: newWishlistItem.Price,
      category: newWishlistItem.category,
      priority: newWishlistItem.priority,
      notes: newWishlistItem.notes,
    });
  } catch (error) {
    console.error("Error creating wishlist item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const itemToDelete = req.params.id;
    await Wishlist.findByIdAndDelete(itemToDelete);
    res.status(200).json({ message: "Deleted item successfully" });
  } catch (error) {
    res.status(500).json({ message: "Could not fetch item" });
  }
};

export const getItems = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const userItems = await Wishlist.find({
      userId: { $eq: loggedInUserId },
    });
    res.status(200).json(userItems);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch items" });
  }
};

export const updateItem = async (req, res) => {
  try {
    const updated = await Wishlist.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json({ message: "Item updated successfully", updated });
  } catch (error) {
    console.log("Error in updating fields");
    res.status(500).json({ message: "Internal server error" });
  }
};
