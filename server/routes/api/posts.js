const express = require('express');
const mongodb = require('mongodb').MongoClient;

const router = express.Router();

// Get posts
router.get('/',(req, res) => {
    res.send('ok');
});
// Add s

// Delete

// const uri = "mongodb+srv://admin:<password>@cluster-uaml3.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

module.exports = router;