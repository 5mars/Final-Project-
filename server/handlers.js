const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);
//put endpoints below
const hello = async (req, res) => {

}
const getUsername = async (req, res) => {
    
}
//export handles here
module.exports = {
hello
};