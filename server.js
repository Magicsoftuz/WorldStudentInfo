const config = require("dotenv");
config.config();
const app = require("./middleware/app");
const db = require("./config/db");

db;

app.listen(process.env.PORT, () => {
  console.log("Server running!");
});
