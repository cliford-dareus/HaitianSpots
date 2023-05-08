const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    location: {
      type: Schema.Types.ObjectId,
      ref: "Location",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: "String",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
