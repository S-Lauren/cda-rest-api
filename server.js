const express = require('express'); 
const bodyParser = require('body-parser'); 

const app = express(); 

// Parser le contenu en JSON 
app.use(bodyParser.json()); 

app.get('/', (req, res) => {
  res.json({message: "Hello JSON :) !"})
})

app.listen(3000, () => {
  console.log("Server is runnin' on port 3000")
})