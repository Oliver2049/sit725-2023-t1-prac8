var express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
var app = express();
const uri =
  "mongodb+srv://Oliverhatesyou2049:uB3eQvI3Q5nr8Mom@atlascluster.iodctpd.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";
let collection;
app.use(express.static(__dirname + "/public_html"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Create a MOngoClient with a MongoClientsOptions object to set the Satable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function runDBConnection() {
  try {
    //Connect the client to the server (optional starting in v4.7)
    await client.connect();
    collection = client.db().collection("Cat");
    console.log(collection);
  } catch (ex) {
    console.error(ex);
  }
}
runDBConnection();
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
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public_html/index.html");
});
app.get("/api/cards", async (req, res) => {
  try {
    const cards = await collection.find().toArray();
    res.json({ statusCode: 200, data: cards, message: "Success" });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});
var port = process.env.port || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
});
