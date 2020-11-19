const Post = require("../models/post"); 


exports.creatPost = (req, res) => {
  try {
    const post = Post.addPost(req.body.content, req.body.author, req.body.date, req.body.topic_id)
    res.status(200).json(post)
  }catch (err) {
    if(err) throw err; 
    res.status(400)
  }
}

exports.findAllPost = async (req, res) => {
  try {
    const [allposts] = await Post.getAllPost();
    res.status(200).json(allposts)
  } catch(err) {
    if(err) {
      res.status(400)
    }
  }
}

exports.findPostById = async (req, res) => {
  try {
    const postById= await Post.getPostByBId(req.params.id);
    res.status(200).json(postById)
  } catch(err) {
    if(err) {
      res.status(400)
    }
  }
}

exports.editPost = async (req, res) => {
  try {
    const editpost = await Post.updatePost(req.body.id, req.body.content, req.body.author, req.body.date, req.body.topic_id);
    res.status(201).json(editpost)
  } catch(err) {
    if(err) {
      res.status(400)
    }
  }
}

exports.removePost = async (req, res) => {
  try {
    const deletePost = await Post.deletePost(req.params.id);
    res.status(200).json(deletePost)
  } catch(err) {
    if(err) {
      res.status(400)
    }
  }
}