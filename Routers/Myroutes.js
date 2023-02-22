const express = require("express");
const router = express.Router();

const Token = require("../Routerslogic/Token");
const getHelper = require("../Routerslogic/Getlogics");


router.get("/lipanampesa",Token,getHelper.lipaNaMpesaOnline);
router.get("/",Token,getHelper.lipaNaMpesaOnline); 


module.exports = router;