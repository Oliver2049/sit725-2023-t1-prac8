const catModel = require("../models/cat");

async function postCard(req, res) {
  try {
    await catModel.postCard(req.body);
    res.json({ statusCode: 200, message: "Card inserted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
}

async function getAllCats(req, res) {
  try {
    const result = await catModel.getAllCats();
    res.json({
      statusCode: 200,
      data: result,
      message: "get all cards success",
    });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
}

module.exports = { postCard, getAllCats };
