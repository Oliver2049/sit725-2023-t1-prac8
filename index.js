const express = require("express");

const router = require("./routes/router");
var catModel = require("./models/cat");

const app = express();

app.use(express.static(__dirname + "/public_html"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

catModel.runDBConnection();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App listening on port: " + port);
});
