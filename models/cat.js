const client = require("../dbConnection");
let collection;

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

module.exports = { runDBConnection, postCard, getAllCats };
