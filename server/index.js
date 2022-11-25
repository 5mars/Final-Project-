"use strict";

//import needed node modules
const express = require('express');
const helmet = require("helmet");
const morgan = require("morgan");

const PORT = 8000;

//import handles here:
const {
hello
} = require("./handlers.js");

express()

.use(express.json())
.use(helmet())
.use(morgan('tiny'))

//write endpoints below 
.get('/hello', hello)
// .get("/", getUsername)

//catch all endpoints 
.get("*", (req, res) => {
    res.status(404).json({status: 404, message: "This is obviously not what you are looking for..."});
})

// Node spins up our server and sets it to listen on port 8000.
.listen(PORT, () => console.info(`Listening on port ${PORT}`));