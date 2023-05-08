const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: "String",
      trim: true,
      required: true,
      maxlength: [30, `Name must be 30 character or less`],
    },
    password: {
      type: "String",
      trim: true,
      required: true,
    },
    email: {
      type: "String",
      trim: true,
      required: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please prove a valid email",
      ],
    },
    jwtToken: {
      type: "String",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  // if(!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(this.password, salt);
  this.password = hashpassword;
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
