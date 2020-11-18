const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 
const topicRoutes = require('./routes/topic'); 
app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.json({message: "Hello JSON :) !"})
})

app.get('/topics', topicRoutes)
app.post('/topics', topicRoutes)
app.put('/topics/:id', topicRoutes)
app.delete('/topics/:id', topicRoutes)

app.listen(3000, () => {
  console.log("Server is runnin' on port 3000")
})