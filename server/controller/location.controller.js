const { StatusCodes } = require("http-status-codes");
const Location = require("../models/location.model");

const getAllLocations = async (req, res) => {
  const location = await Location.find({});
  res.status(200).json({ location });
};

const createLocation = async (req, res) => {
  const body = req.body;
  const user = req.user;

  const location = await Location.create({
    ...body,
    creator: user._id,
  });
  res.status(StatusCodes.CREATED).json({ location });
};

// const updateLocation = async (req, res) => {
//   const { id } = req.params;
//   const location = await Location.findByIdAndUpdate();
// };

const updateFavoriteLocation = async (req, res) => {
  const { id } = req.params;
  const user = req.user;
  
  console.log("USER : " + user)

  try {
    const location = await Location.findById(id);

    if (!location) {
      return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "No place with this id" });
    }
    
    if (location.favorite.includes(user.user._id)) {
      await location.updateOne({ $pull: { favorite: user.user._id } });
      
      res.status(StatusCodes.OK).json({
        status: StatusCodes.OK,
        message: "Place unliked",
      });
    } else {
      await location.updateOne({ $push: { favorite: user.user._id } });
      res.status(StatusCodes.OK).json({
        status: StatusCodes.OK,
        message: "Place liked",
      });
    }
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      message: "Bad request",
    });
  }
};

const getLocationById = async (req, res) => {
  const { id } = req.params;

  try {
    const location = await Location.findById(id)
      .populate({
        path: "comments",
        populate: { path: "user", select: "userName" },
      })
      .populate({ path: "creator", select: ["userName", "email"] });
    res.status(200).json(location);
  } catch (error) {
    res.status(401).send({
      status: "failure",
      message: "location does not exist!",
    });
  }
};

const getLocation = async (req, res) => {
  const { name, ratingFilter, sort } = req.query;
  let newObject = {};

  console.log(name);

  if (name) {
    newObject.name = { $regex: name, $options: "i" };
  }

  if (ratingFilter) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };

    const regEx = /\b(<|>|>=|=|<|<=)\b/g;

    let filters = ratingFilter.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    const options = ["price", "rating"];

    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        newObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = Location.find(newObject);

  if (sort) {
    const sortList = sort.split(",").join(" ");
    result.sort(sortList);
  } else {
    result.sort("asc");
  }

  const location = await result;
  res.status(StatusCodes.OK).json(location);
};

module.exports = {
  getAllLocations,
  createLocation,
  getLocation,
  getLocationById,
  updateFavoriteLocation,
};
