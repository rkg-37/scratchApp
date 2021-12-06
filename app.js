const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
connectDB();
// load a config file
dotenv.config({ path: "./config/config.env" });

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// handlebars
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

//routes
app.use("/", require("./routes/index"));

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
