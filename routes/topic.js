const express = require("express");
const router = express.Router();
// const connect = require("../models/db");
const topics = require("../controllers/topic");
router.get('/topics',topics.findAll)

module.exports =router; 