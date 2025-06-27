import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    itemName: {
      type: String,
      required: true,
      maxlength: 100,
    },
    Price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      default: "other",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    notes: {
      type: String,
      maxlength: 300,
    },
  },
  {
    timestamps: true,
  }
);

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
