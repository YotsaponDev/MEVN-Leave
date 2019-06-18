const express = require('express');
const MongoClient = require('mongodb');

const router = express.Router();

// Get data
router.get('/', async (req, res) => {
    const get = await callDatabase();
    res.send(await get.find({}).toArray());
});

// Add item
router.post('/',async (req, res)=> {
    const post = await callDatabase();
    await post.insertOne({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "create_at": new Date(),
        "updated_at": null
    })
    res.status(201).send();
})

router.put('/',async (req, res)=> {
    const put = await callDatabase();
    await put.updateOne(
        {"_id" : new MongoClient.ObjectID(req.body._id)},
        {$set: {
            "firstname": req.body.firstname,
            "lastname": req.body.lastname,
            "updated_at": new Date()
        }},
        { upsert: true }
    )
    res.status(202).send();
})

// Delete item
router.delete('/:id', async (req, res) => {
    const remove = await callDatabase();
    await remove.deleteOne({_id: new MongoClient.ObjectID(req.params.id)});
    res.status(204).send();
})

async function callDatabase(){
    console.log('Before Connect');
    const uri = "mongodb+srv://admin:QN2uRjQJvMCRzwON@cluster-uaml3.mongodb.net/test?retryWrites=true&w=majority";
    const client = await new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
    // const collection = client.db("mevn").collection("mevn-collection");
        if(err) {
            console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
    console.log('Connected...');
    // perform actions on the collection object
    //   client.close();
    });
    return client.db("mevn").collection("mevn-collection");
}

module.exports = router;