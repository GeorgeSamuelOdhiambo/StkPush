const express = require("express");
const mongoose = require("mongoose");
const body_parser = require("body-parser");
require("dotenv").config();
const app = express();

const router = require("./Routers/Myroutes");
const { apps,db } = require("./config");

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,content-type,set-cookie"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(body_parser.json());
app.use(router);

mongoose
  .connect(db.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(apps.PORT, () => {
      console.log(`App running on port : ${apps.PORT}`);
    });
  })
  .catch((err) => {
    console.log("" + err);
  });
