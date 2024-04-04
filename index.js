var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public_html"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cardList = [
  {
    title: "Kitten 2",
    image: "image/Birman.jpg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2",
  },
  {
    title: "Kitten 3",
    image: "image/Bengal.jpg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3",
  },
];
app.get("/api/cards", (req, res) => {
  res.json({ statusCOde: 200, data: cardList, message: "Success" });
});
var port = process.env.port || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
});
