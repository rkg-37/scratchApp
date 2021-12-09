const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");

// handlebars variables
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

//connection to the database
const connectDB = require("./config/db");
connectDB();

// load a config file
dotenv.config({ path: "./config/config.env" });

// logger in dev mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// set path for views folder
app.set("views", path.join(__dirname, "views"));

// handlebars settings
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//routes imported from  routes folder
app.use("/", require("./routes/index"));

// port 3000 or 5000 activates
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
