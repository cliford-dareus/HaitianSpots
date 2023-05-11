const { StatusCodes } = require("http-status-codes");
const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  const userId = req.user;
  
  const users = await User.find({});

  res.status(StatusCodes.OK).json(users);
};

const getOneUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ _id: id });

  res.status(StatusCodes.OK).json(user);
};

module.exports = { getAllUsers, getOneUser };
