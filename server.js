var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
const routes = require("./routes");
var bodyParser = require('body-parser');
// Sets up the Express App
// =============================================================
var app = express();

app.use(bodyParser.urlencoded({ extended: true })); app.use(bodyParser.json())
app.use(bodyParser.json(), function (req, res, next) {
    next();
});

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


app.use(routes);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
  })
})

