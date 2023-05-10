// const CustomError = require("../error/custom-error");
const { isTokenValid } = require("../Utils/JWT");
const { attachCookiesToResponse } = require("../Utils/JWT");

const authentication = async (req, res, next) => {;
  const{refreshToken, accessToken } = req.cookies;

  try {
    if (accessToken) {
      const payload = isTokenValid(accessToken);
      req.user = payload.user;
      return next();
    }

    const payload = isTokenValid(refreshToken);

    const existingToken = await Token.findOne({
      user: payload.user.userId,
      refreshToken: payload.refreshToken,
    });

    if (!existingToken || !existingToken?.isValid) {
      res.status(400).send('Authentication Invalid')
      return
    }

    attachCookiesToResponse({
      res,
      user: payload.user,
      refreshToken: existingToken.refreshToken,
    });

    req.user = payload.user;
    next();
  } catch (error) {
    res.status(400).send('Authentication Invalid')
  }
};

module.exports = authentication;
