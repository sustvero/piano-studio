const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// use routing parameters?
app.get('/', function(req, res) {
  res.render("index", {});
});

app.get('/bio', function(req, res) {
  res.render("bio", {});
});

app.get('/contact', function(req, res) {
  res.render("contact_me", {});
});

app.get('/lessons', function(req, res) {
  res.render("lessons", {});
});

app.get('/relax', function(req, res) {
  res.render("relax_listen", {});
});

app.get('/gallery', function(req, res) {
  res.render("photo_gallery", {});
});

app.get('/resume', function(req, res) {
  res.render("resume", {});
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});
