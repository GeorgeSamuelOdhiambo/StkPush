const express = require("express");
const router = express.Router();

const Token = require("../Routerslogic/Token");
const gethelper = require("../Routerslogic/Getlogics");

router.get("/", gethelper.getslash);
router.post("/lipanampesa",Token, gethelper.lipaNaMpesaOnline);
router.get("/getstatment",gethelper.mpesaresult);
router.get("/callback",Token,gethelper.mpesaresult);




module.exports = router;