const Topic = require("../models/topic"); 




exports.findAll = async (req, res) => {
  try {
    // j'attends la réponse de la requete sql du model
    const [alltopics] = await Topic.getAll();
    // j'envois un status.
    res.status(200).json(alltopics)
    console.log(alltopics)
  }catch(err) {
    if(err) {
      res.status(400)
    }
  }
}
exports.createTopic = async (req, res) => {
  try {
    // Je veux sauver un nouvel titre de topic en database.. 
    const topic = await Topic.addTopic(req.body.title);
    // j'envois un status 201 si tout va bien.
    res.status(201).json(topic)
    console.log(topic)
  } catch(err) {
    if(err) {
      res.status(400)
    }
  }
}
exports.editTopic = async (req, res) => {
  try {
    // Je veux modifier un topic en database, j'ai besoin de l'id et du champ à modifier. 
    const topic = await Topic.updateTopic(req.body.id, req.body.title);
    res.status(201).json(topic)
    console.log(topic)
  } catch(err) {
    if(err) {
      res.status(400)
    }
  }
}

exports.deleteTopic = async (req, res) => {
  try {
    // Je veux supprimer un topic en database, j'ai besoin de l'id en paramètre de l'url. 
    const deleteTopic = await Topic.delete(req.params.id);
    res.status(201).json(deleteTopic)
    console.log(deleteTopic)
  } catch(err) {
    if(err) {
      res.status(400)
    }
  }
}
