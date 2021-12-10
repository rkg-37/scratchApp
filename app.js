const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
// handlebars variables
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

//connection to the database
const connectDB = require("./config/db");
connectDB();

// load a config file
dotenv.config({ path: "./config/config.env" });

// passport config
require("./config/passport")(passport);

// logger in dev mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// set path for views folder
//app.set("views", path.join(__dirname, "views"));

// handlebars settings
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false, // we dont want to save a session if nothing modified
    saveUninitialized: false, // dont create as session if nothing stored
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//static folder
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

//routes imported from  routes folder
app.use("/", require("./routes/index"));

// port 3000 or 5000 activates
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
