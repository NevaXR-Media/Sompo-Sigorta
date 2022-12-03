const SompoUser = require("./../models/sompoUserModel");

exports.language = (req, res) => {
  res.render("language", {
    locale: req.localeData,
  });
};

exports.explore = (req, res) => {
  res.render("explore", {
    locale: req.localeData,
  });
};

exports.formScreen = (req, res) => {
  res.render("formScreen", {
    locale: req.localeData,
    lang: req.params?.locale || "en",
  });
};

exports.image = async (req, res) => {
  const userId = req.params.userId;
  let user;
  try {
    user = await SompoUser.findOne({ _id: userId });
  } catch (e) {
    res.render("error");
    return;
  }
  if (!user?._id) {
    res.render("error");
    return;
  }
  const src = `${process.env.AZURE_CDN_BASE_URL}/${process.env.AZURE_BUCKET_CONTAINER_NAME}/${user.image}`;
  res.render("imageScreen", {
    src: src,
    imageLocale: user.locale,
    locale: req.localeData,
    name: `${user?.name} ${user?.surname}`,
    _id: user?._id,
  });
};

exports.createNFTScreen = async (req, res) => {
  const userId = req.params.userId;
  res.render("createNFTScreen", {
    locale: req.localeData,
    _id: userId,
  });
};
