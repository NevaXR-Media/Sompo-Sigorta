const SompoUser = require("./../models/sompoUserModel");

exports.getAllUsers = async (req, res, next) => {
  const users = await SompoUser.find({});
  res.status(200).json({
    status: "success",
    data: users,
  });
};

exports.createUser = async (req, res, next) => {
  const user = await SompoUser.create(req.body);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

exports.updateUser = async (req, res, next) => {
  const { id } = req.params;
  const userData = {
    ...req.body,
  };
  const user = await SompoUser.findByIdAndUpdate(id, userData, {
    new: true,
  });
  res.status(200).json({
    status: "success",
    data: user,
  });
};
