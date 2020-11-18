const express = require("express");
const router = express.Router();
const topics = require("../controllers/topic");

router.get('/topics',topics.findAll)
router.post('/topics',topics.createTopic)
router.put('/topics/:id',topics.editTopic)
router.delete('/topics/:id',topics.deleteTopic)
module.exports =router; 