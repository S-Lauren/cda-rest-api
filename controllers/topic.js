const Topic = require("../models/topic"); 

exports.findAll = async (req, res) => {
  try {
    // waiting the response from sql request
    const [alltopics] = await Topic.getAll();
    // send status 200 if all good
    res.status(200).json(alltopics)
  } catch(err) {
    if(err) {
      res.status(400)
    }
  }
}

exports.findById = async (req, res) => {
  try {
    // send request param for url
    const topicByID = await Topic.getById(req.params.id);
    res.status(201).json(topicByID)
  } catch(err) {
    if(err) {
      res.status(400)
    }
  }
}

exports.findAllPostByTopic = async (req, res) => {
  try {
    const topicByID = await Topic.getAllPostFromTopic(req.params.id);
    res.status(201).json(topicByID)
  } catch(err) {
    if(err) {
      res.status(400)
    }
  }
}

exports.createTopic = async (req, res) => {
  try {
    const topic = await Topic.addTopic(req.body.title);
    res.status(201).json(topic)
  } catch(err) {
    if(err) {
      res.status(400)
    }
  }
}

exports.editTopic = async (req, res) => {
  try {
    // Need the id and the field to update
    const topic = await Topic.updateTopic(req.params.id, req.body.title);
    res.status(201).json(topic)
  } catch(err) {
    if(err) {
      res.status(400)
    }
  }
}

exports.deleteTopic = async (req, res) => {
  try {
   // Need the Id in url param
    const deleteTopic = await Topic.delete(req.params.id);
    res.status(201).json(deleteTopic)
  } catch (err) {
    if(err) {
      res.status(400)
    }
  }
}
