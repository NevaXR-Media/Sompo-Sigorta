const en = require("./../locales/en.json");
const tr = require("./../locales/tr.json");

const locales = { en, tr };

exports.locale = (req, res, next) => {
  if (!req.params?.locale || locales[req.params?.locale]) {
    req.localeData = locales[req.params?.locale] || locales["en"];
    next();
  } else {
    res.render("error");
  }
};
