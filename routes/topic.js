const express = require("express");
const router = express.Router();
const topics = require("../controllers/topic");
const posts = require("../controllers/post");

router.get('/topics',topics.findAll)
router.get('/topics/:id',topics.findById)
router.get('/topics/:id/posts', topics.findAllPostByTopic)
router.post('/topics/:id/posts', posts.creatPost)
router.put('/topics/:id/posts/:id', posts.editPost)
router.delete('/topics/:id/posts/:id', posts.removePost)
router.post('/topics',topics.createTopic)
router.put('/topics/:id',topics.editTopic)
router.delete('/topics/:id',topics.deleteTopic)

module.exports =router; 