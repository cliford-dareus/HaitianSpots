// const CustomError = require("../error/custom-error");
const User = require("../models/user.model");
const { isTokenValid } = require("../Utils/JWT");
const { attachCookiesToResponse } = require("../Utils/JWT");

const authentication = async (req, res, next) => {
  const { refreshToken, accessToken } = req.signedCookies;

  try {
    if (accessToken) {
      const payload = isTokenValid(accessToken);
      req.user = payload;
      return next();
    }

    const payload = isTokenValid(refreshToken);

    const existingToken = await User.findOne({
      user: payload.user._id,
    });

    if (!existingToken || !existingToken?.isValid) {
      res.status(400).send("Authentication Invalid");
      return;
    }

    attachCookiesToResponse({
      res,
      user: payload,
      refreshToken: existingToken.refreshToken,
    });

    req.user = payload;
    next();
  } catch (error) {
    res.status(400).send("Authentication Invalid");
  }
};

module.exports = authentication;
