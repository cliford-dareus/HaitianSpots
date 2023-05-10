const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: "String",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
