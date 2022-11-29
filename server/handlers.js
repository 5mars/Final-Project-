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

//Endpoint to get ALL user 
const getAllUsers = async (req, res) => {
try {
    await client.connect();
    const db = client.db("finalProject");

    const result = await db.collection("users").find().toArray();

    res.status(200).json({status: 200, data: result, message: "All users retrieved!"});

} catch (err) {
    console.log("err", err);
    res.status(500).json({status: 500, message: "Couldn't get all users..."});
}
client.close();
};

//endpoint to get specific user
const getUser = async (req, res) => {
    const {userId} = req.params;

try {
    await client.connect();
    const db = client.db("finalProject");
    const result = await db.collection("users").findOne({email: userId});

    res.status(200).json({status: 200, data: result, message: "Specific user retrieved!"})

} catch (err) {
    res.status(500).json({status: 500, message: "Couldn't get specific user..."});
}
client.close();
}

//endpoint to get specific user
const getCurrentUser = async (req, res) => {
    try {
        await client.connect();
        const db = client.db("finalProject");
        const result = await db.collection("users").findOne().toArray();
    
        res.status(200).json({status: 200, data: result, message: "Current user retrieved!"})
    
    } catch (err) {
        res.status(500).json({status: 500, message: "Couldn't get current user..."});
    }
    client.close();
    }

const editUser = async (req, res) => {
    try {
        await client.connect();
        const db = client.db("finalProject");
        const result = await db.collection("users").updateOne().toArray;

        res.status(200).json({status: 200, data: result, message: "User successfully updated!"})

    } catch (err) {
        res.status.json({status: 500, message: "Couldn't update user's information..."})
    }
    client.close();
}
//export handles here
module.exports = {
getAllUsers,
getUser,
getCurrentUser,
editUser
};