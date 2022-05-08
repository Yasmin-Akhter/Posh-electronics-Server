const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());




const uri = "mongodb+srv://process.env.DB_USER:process.env.DB_PASS@cluster0.xoif2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const productCollection = client.db("warehouse").collection("product");
    console.log('connected db');
    // perform actions on the collection object
    client.close();
});



app.get('/', (req, res) => {
    res.send('hello')
});
app.listen(port, () => {
    console.log('listening from port', port);
})