var createError = require("http-errors");
var express = require("express");
var cors = require("cors")
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");


var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

// JUST RETURN TEXT "HELLO"
app.get("/", (req, res) => {
  res.send("Express Backend");
});

const admin = require("firebase-admin");

const serviceAccount = require("./firebaseSecrets/itghor-8b818-firebase-adminsdk-fbsvc-b68f4827f1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://itghor-8b818.firebaseio.com", 
});



app.use("/api", require("./routes/dataFetch"));
app.use("/api", require("./routes/bookingTheMeeting"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});








// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
