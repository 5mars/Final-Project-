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

.listen(PORT, () => console.info(`Listening on port ${PORT}`));