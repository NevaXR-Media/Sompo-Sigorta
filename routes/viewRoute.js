const express = require("express");
const router = express.Router();
const viewController = require("./../controllers/viewController");
const LocaleController = require("./../controllers/localeController");

/* GET home page. */
router.get("/:locale?", LocaleController.locale, viewController.language);
router.get(
  "/explore/:locale?",
  LocaleController.locale,
  viewController.explore
);
router.get(
  "/explore/:locale?",
  LocaleController.locale,
  viewController.explore
);
router.get(
  "/howToCreate/:locale?",
  LocaleController.locale,
  viewController.howToCreate
);
router.get(
  "/form/:locale?",
  LocaleController.locale,
  viewController.formScreen
);
router.get(
  "/image/:userId/:locale?",
  LocaleController.locale,
  viewController.image
);

router.get(
  "/createNFT/:userId/:locale?",
  LocaleController.locale,
  viewController.createNFTScreen
);

module.exports = router;
