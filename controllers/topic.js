const Topic = require("../models/topic"); 

exports.findAll = (req, res) => {
  Topic.getAll((err, data) => {
    if(err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
}