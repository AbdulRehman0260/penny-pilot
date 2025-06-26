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
    description: {
      type: String,
      maxlength: 500,
    },
    estimatedPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      enum: [
        "electronics",
        "clothing",
        "books",
        "travel",
        "home",
        "sports",
        "other",
      ],
      default: "other",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    status: {
      type: String,
      enum: ["wanted", "saving_for", "purchased", "removed"],
      default: "wanted",
    },
    targetDate: {
      type: Date, // Optional target date to buy
    },
    notes: {
      type: String,
      maxlength: 300,
    },
    purchaseDate: {
      type: Date, // Set when status changes to 'purchased'
    },
    actualPrice: {
      type: Number, // Actual price paid when purchased
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
