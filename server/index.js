"use strict";

//import needed node modules
const express = require('express');
const helmet = require("helmet");
const morgan = require("morgan");

const PORT = 8000;

//import handles here:
const {
getAllUsers,
getUser,
getCurrentUser,
editUser,
addPost,
getArtists
} = require("./handlers.js");

express()

.use(express.json())
.use(helmet())
.use(morgan('tiny'))

//write endpoints below 
.get("/api/get-users", getAllUsers)
.get("/api/get-user/:userId", getUser)
.get("/api/currentUser", getCurrentUser)
.patch("/api/edit-user", editUser)
.post("/api/add-post", addPost)

.get("/api/get-artists", getArtists)
//catch all endpoints 
.get("*", (req, res) => {
    res.status(404).json({status: 404, message: "This is obviously not what you are looking for..."});
})

// Node spins up our server and sets it to listen on port 8000.
.listen(PORT, () => console.info(`Listening on port ${PORT}`));