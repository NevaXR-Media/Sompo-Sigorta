/* eslint-disable no-console */
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

//configuration file settings
const env = dotenv.config({ path: "./config.env" });
dotenvExpand.expand(env);

const http = require("http");
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 🔥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require("./app");

app.locals.env = process.env;

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {})
  .then(async () => {
    console.log("DB Connection Successful!");
  })
  .catch((err) => console.error(err));

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.setTimeout(10 * 60 * 1000); // 10 * 60 seconds * 1000 msecs
server.listen(port, () => {
  console.log(`Chat App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  if (err?.isAxiosError) {
    console.log("UNHANDLED Axios Error...");
    console.log(err);
  } else {
    console.log("UNHANDLED REJECTION! 🔥 Shutting down...");
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  }
});

process.on("SIGTERM", () => {
  console.log("ðŸ‘‹ SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("ðŸ’¥ Process terminated!");
  });
});
