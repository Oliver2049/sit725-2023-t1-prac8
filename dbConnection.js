const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://Oliverhatesyou2049:uB3eQvI3Q5nr8Mom@atlascluster.iodctpd.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
module.exports = client;
