const mongoose = require("mongoose");

const SompoUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    email: {
      type: String,
    },
    image: {
      type: String,
    },
    locale: {
      type: String,
    },
    walletAddress: {
      type: String,
    },
    created: {
      type: Date,
    },
    lastUpdated: {
      type: Date,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: { createdAt: "created", lastUpdatedAt: "lastUpdated" },
  }
);

const SompoUser = mongoose.model("SompoUser", SompoUserSchema);

module.exports = SompoUser;
