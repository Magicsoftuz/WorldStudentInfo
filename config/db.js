const mongoose = require("mongoose");

const mongo = mongoose
  .connect(process.env.DB_URL, {})
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongo;
