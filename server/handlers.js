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
        console.log(req.body)
        res.status(200).json({status: 200, data: result, message: "User successfully updated!"})

    } catch (err) {
        res.status(500).json({status: 500, message: "Couldn't update user's information..."})
    }
    client.close();
}

// const editArtist = async (req, res) => {
//     const {email, followedBy} = req.body;
//     try {

//         await client.connect();
//         const db = client.db("finalProject");
//         const query = {email};
//         const newValue = {$set: {followedBy}};
//         const result = await db.collection("artists").updateOne(query, newValue);
//         res.status(200).json({status: 200, data: result, message: "artist successfully updated"})
//     } catch (err) {
//         res.status(500).json({status: 500, message: "Couldn't update artist..."})
//     }
//     client.close()
// }

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

//get specific artist 
const getArtist = async (req, res) => {
    const {artistId} = req.params;
    try {
        await client.connect()
        const db = client.db("finalProject")
        const result = await db.collection("artists").findOne({name: artistId})

        res.status(200).json({status: 200, data: result, message: "Specific artist retrieved successfully!"})
    } catch (err) {
        res.status(500).json({status: 500, message: "Couldn't retrive specific artist..."})
    }
    client.close()
}

const getSingleReservation = async (req, res) => {
    try {
        await client.connect();
        const db = client.db("finalProject");
        const id = req.params.reservationId;

        const result = await db.collection("reservations").findOne({id});
        
        result.data !== null ? 
        res.status(200).json({status: 200, data: result, message: "Single reservation."}) 
        : res.status(404).json({status: 404, message: "Reservation not found..."})
    
    } catch (err) {
        res.status(404).json({status: 404, message: "Reservation not found..."})
    }
        client.close()

    };

// get confirmation after completing checkout
const getSingleTransaction = async (req, res) => {
try {
    await client.connect();
    const db = client.db("finalProject");
    const id = req.params.transactionId;

    const result = await db.collection("transactions").findOne({id});

    res.status(200).json({status: 200, data: result, message: "Transaction successfully retrieved!"})
} catch (err) {
    res.status(500).json({status: 500, message: "Couldn't add reservation..."})
}
client.close();
}

const addReservation = async (req, res) => {
    const body = { id: uuidv4(), ...req.body, withArtist: req.params};

    try{
        await client.connect();
        const db = client.db("finalProject")

        const result = await db.collection("reservations").insertOne(body)

        res.status(200).json({status: 200, data: body, message: "Reservation successfully added!"})
    } catch (err) {
        res.status(500).json({status: 500, message: "Couldn't add reservation..."})
    }
    client.close()
}

//buy flash from artist
const buyItem = async (req, res) => {
    const body = { id: uuidv4(), ...req.body, fromArtist: req.params, price: "100$"};

    try {
        await client.connect();
        const db = client.db("finalProject")

        const result = await db.collection("transactions").insertOne(body)

        res.status(200).json({status: 200, data: body, message: "Flash successfully bought!"})

    } catch (err) {
        res.status(500).json({status: 500, message: "Couldn't proceed with transaction..."})
    }
    client.close();
}


//patch USER following array 
const followArtist = async (req, res) => {
    const {email, following} = req.body;
    const {artistId} = req.params;

    try {
        await client.connect();
        const db = client.db("finalProject")
        const query = {email}

        const userVerify = await db.collection("users").findOne(query);

        const checkFollow = userVerify.following.includes(artistId);

        if (checkFollow) {
            //update artist side 
            const removeValue = {$pull: {following: artistId}}
            const result = await db.collection("users").updateOne(query, removeValue);
            const followArray = await db.collection("users").findOne(query);
            res.status(400).json({status: 400, data: followArray.following, message: "Artist successfully removed!"})

        } else {
            //update artist side
            const addValue = {$push: {following: artistId}};
            const result = await db.collection("users").updateOne(query, addValue);
            const followArray = await db.collection("users").findOne(query);
            res.status(200).json({status: 200, data: followArray.following, message: "Artist successfully added!"})
        }

    } catch (err) {
        res.status(500).json({status: 500, message: "Couldn't update user..."})
    }
    client.close()
}

//export handles here
module.exports = {
getAllUsers,
getUser,
getCurrentUser,
editUser,
addPost,
getArtists,
getArtist, 
getSingleReservation,
addReservation,
followArtist,
buyItem,
getSingleTransaction,
// editArtist
};