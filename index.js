const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");

//To set views
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//To be able to use css and js files
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render("home")
})

app.listen(port, () => {
  console.log(`This is running!`)
})