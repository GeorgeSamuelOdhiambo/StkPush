const express = require("express");
const router = express.Router();

const Token = require("../Routerslogic/Token");
const postHelper = require("../Routerslogic/Postroutelogic");

router.post("/lipanampesa", Token, postHelper.lipaNaMpesaOnline);
router.post("/callbackUrl", postHelper.callmeback);

module.exports = router;
