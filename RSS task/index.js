const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const parseData = require("./utils/parseData");
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "views"));

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/tableview", async (req, res) => {
  reformattedFeed = await parseData();
  res.render("pages/tableview", { reformattedFeed });
});

app.get("/mapview", async (req, res) => {
  reformattedFeed = await parseData();
  res.render("pages/mapview", { reformattedFeed });
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
