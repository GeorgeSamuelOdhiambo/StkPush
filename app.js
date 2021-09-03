const express = require("express");
const mongoose = require('mongoose');
const body_parser = require("body-parser");
require('dotenv').config();
const app = express();

const router = require("./Routers/Myroutes");

app.use(body_parser.json());

app.use(router);

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then((result) => {
    app.listen(8080);
    console.log("All good");
})
.catch((err) => {
    console.log(err);
});