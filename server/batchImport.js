const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);


//batch import 
const { artists } = require("./data.js")


const batchImport = async () => {

    try {
        await client.connect();

        const db = client.db("finalProject")
        console.log("Connected!")

        const result = await db.collection("artists").insertMany(artists);
        console.log("data imported!")

    } catch (err) {
        console.log(err.stack)
        console.log("Ooupsy, something went wrong!")
    }
    client.close()
    console.log("Disconnected!")
}

batchImport();