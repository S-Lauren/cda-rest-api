const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 
const topicRoutes = require('./routes/topic'); 
const postRoutes = require('./routes/post'); 

app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.json({message: "Hello JSON :) !"})
})

// topic routes
app.get('/topics', topicRoutes)
app.get('/topics/:id', topicRoutes)
app.get('/topics/:id/posts', topicRoutes)
app.post('/topics/:id/posts', topicRoutes)
app.put('/topics/:id', topicRoutes)
app.put('/topics/:id/posts/:id', topicRoutes)
app.post('/topics', topicRoutes)
app.delete('/topics/:id', topicRoutes)
app.delete('/topics/:id/posts/:id', topicRoutes)

// posts routes
app.get('/posts',postRoutes )
app.get('/posts/:id',postRoutes )
app.post('/posts',postRoutes )
app.put('/posts/:id',postRoutes )
app.delete('/posts/:id',postRoutes )

app.listen(3000, () => {
  console.log("Server is runnin' on port 3000")
})