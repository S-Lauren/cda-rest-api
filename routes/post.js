const express = require("express");
const router = express.Router();
const posts = require("../controllers/post");


router.get('/posts',posts.findAllPost)
router.get('/posts/:id',posts.findPostById)
router.post('/posts',posts.creatPost)
router.put('/posts/:id',posts.editPost)
router.delete('/posts/:id',posts.removePost)

module.exports =router; 