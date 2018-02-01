// Dependencies
var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");


// Create an instance of the express app
var app = express();

// Specify the port.
var port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('app/public'));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});
require("./app/routing/apiRoutes.js")(app);
// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on port " + port);
});