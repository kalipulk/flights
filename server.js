var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
const routes = require("./routes");
// Sets up the Express App
// =============================================================
var app = express();

// Requiring our models for syncing
var db = require("./models");
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
  })
})

