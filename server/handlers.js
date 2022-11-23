const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


require("dotenv").config();
const { MONGO_URI } = process.env;

//put endpoints below
const hello = async (req, res) => {

}

//export handles here
module.exports = {
hello
};