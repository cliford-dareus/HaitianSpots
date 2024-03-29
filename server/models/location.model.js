const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      trim: true,
      required: true,
      maxlength: [30, `Name must be 30 character or less`],
    },
    description: {
      type: "String",
      trim: true,
      maxlength: [60, `Name must be 60 character or less`],
    },
    speciality: {
      type: [String],
    },
    image: { type: "String", trim: true },
    phone: {
      type: "Number",
      trim: true,
    },
    address: { type: "String", required: true },
    review: {
      type: "String",
      trim: true,
      maxlength: [40, `Name must be 20 character or less`],
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    rating: {
      type: "Number",
      default: 0,
      max: 10,
      min: 0,
    },
    latitude: {
      type: "Number",
      required: true,
      min: -90,
      max: 90,
    },
    longitude: {
      type: "Number",
      required: true,
      min: -180,
      max: 180,
    },
    favorite: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Location", locationSchema);
