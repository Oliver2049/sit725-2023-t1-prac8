const express = require("express");
const app = express();
const router = require("./routes/router");
var catModel = require("./models/cat");
let http = require("http").createServer(app);
let io = require("socket.io")(http);

app.use(express.static(__dirname + "/public_html"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

catModel.runDBConnection();

const port = process.env.PORT || 3000;
http.listen(3000, () => {
  console.log("express server started");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  setInterval(() => {
    socket.emit("number", parseInt(Math.random() * 10));
  }, 1000);
});
