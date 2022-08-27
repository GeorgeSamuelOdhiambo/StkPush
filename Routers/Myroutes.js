const express = require("express");
const router = express.Router();

const Token = require("../Routerslogic/Token");
const gethelper = require("../Routerslogic/Getlogics");


router.get("/lipanampesa",Token,gethelper.lipaNaMpesaOnline);


module.exports = router;