const User = require("../models/user.model");
const { StatusCodes } = require("http-status-codes");

const { attachCookiesToResponse, createJWT } = require("../Utils/JWT");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isAlreadyExist = await User.findOne({ email });
    console.log(isAlreadyExist);

    if (isAlreadyExist) {
      throw new BadRequest("Email already exists");
    }

    const user = await User.create({
      userName: name,
      email,
      password,
    });
    res.status(StatusCodes.CREATED).json(user);
  } catch (e) {
    res.status(500).send({
      status: "failure",
      message: e.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ userName: name });
    console.log(name);
    console.log(user);
    
    if (!user) {
      return res.status(401).send({
        status: "failure",
        message: "user does not exist",
      });
    }
    const match = await user.comparePassword(password);
    if (!match) {
      return res.status(401).send({
        status: "failure",
        message: "password is incorrect",
      });
    }

    const refreshTokenJWT = createJWT({ payload: { user } });

    await User.findByIdAndUpdate(user._id, {
      jwtToken: refreshTokenJWT,
    });

    const { jwtToken, password: newpass, ...other } = user._doc;

    attachCookiesToResponse({
      res,
      user,
      refreshTokenJWT,
    });

    res.status(200).send({
      status: "success",
      message: "logged in successfully",
      data: other,
      refreshTokenJWT,
    });
  } catch (e) {
    res.status(500).send({
      status: "failure",
      message: e.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (refreshToken) {
      await User.updateOne({ jwtToken: refreshToken }, [
        { $unset: ["jwtToken"] },
      ]);

      res.cookie("accessToken", "logout", {
        httpOnly: true,
        expires: new Date(Date.now()),
      });
      res.cookie("refreshToken", "logout", {
        httpOnly: true,
        expires: new Date(Date.now()),
      });

      res.status(200).send({
        status: "success",
        message: "You've been logged out",
      });
    } else {
      return res.status(400).send({
        status: "failure",
        message: "logout error",
      });
    }
  } catch (e) {
    res.status(500).send({
      status: "failure",
      message: e.message,
    });
  }
};

module.exports = {
  registerUser,
  login,
  logout,
};
