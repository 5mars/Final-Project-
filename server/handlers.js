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
    const {name, gender, location, about, email} = req.body;

    try {
        await client.connect();
        const db = client.db("finalProject");
        const query = {email};
        const newValues = {$set: {name, gender, location, about}};
        const result = await db.collection("users").updateOne(query, newValues);

        res.status(200).json({status: 200, data: result, message: "User successfully updated!"})

    } catch (err) {
        res.status(500).json({status: 500, message: "Couldn't update user's information..."})
    }
    client.close();
}




//not quire sure if that's how posting work 
const addPost = async (req, res) => {
    const body = {id: uuidv4(), ...req.body};
    try {
        await client.connect();
        const db = client.db("finalProject")
        const result = await db.collection("posts").insertOne(body);
        res.status(200).json({status: 200, data: body, message: "Post successfull!"})
    } catch (err) {
        res.status(500).json({status: 500, message: "Couldn't post..."})
    }
    client.close()
}


const getArtists = async (req, res) => {
    try {
        await client.connect();
        const db = client.db("finalProject")
        const result = await db.collection("artists").find().toArray();

        res.status(200).json({status: 200, data: result, message: "Artists successfully retrieved!"})

        
    } catch (err) {
        res.status(500).json({status: 500, message: "Couldn't get all artists..."})
    }
    client.close();
}
//export handles here
module.exports = {
getAllUsers,
getUser,
getCurrentUser,
editUser,
addPost,
getArtists
};