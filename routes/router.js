const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", (req, res) => {
  res.render("index.html");
});

router.get("/api/cards", controller.getAllCats);
router.post("/api/cards", controller.postCard);

module.exports = router;
