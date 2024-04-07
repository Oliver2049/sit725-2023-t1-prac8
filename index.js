var express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
var app = express();
const uri =
  "mongodb+srv://Oliverhatesyou2049:uB3eQvI3Q5nr8Mom@atlascluster.iodctpd.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";
let collection;
app.use(express.static(__dirname + "/public_html"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function runDBConnection() {
  try {
    await client.connect();
    collection = client.db().collection("Cat");
    console.log(collection);
  } catch (ex) {
    console.error(ex);
  }
}

async function postCard(card) {
  try {
    const result = await collection.insertOne(card);
    console.log(`Card inserted with the _id: ${result.insertedId}`);
  } catch (ex) {
    console.error(ex);
  }
}

async function getAllCats() {
  try {
    const cards = await collection.find().toArray();
    console.log(`Fetched ${cards.length} cards from the collection`);
    return cards;
  } catch (ex) {
    console.error(ex);
  }
}
runDBConnection();

app.get("/", (req, res) => {
  res.render("index.html");
});
app.get("/api/cards", async (req, res) => {
  try {
    const result = await getAllCats();
    res.json({
      statusCode: 200,
      data: result,
      message: "get all cards success",
    });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});
app.post("/api/cards", async (req, res) => {
  try {
    await postCard(req.body);
    res.json({ statusCode: 200, message: "Card inserted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

var port = process.env.port || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
});
