const dbConnect = require("./db");


module.exports = class Post {

  /* Obviously.. it's the constructor (useless comment)  */ 
  constructor(id, content, author, date, topic_id) {
    this.id = id; 
    this.content = content; 
    this.author = author; 
    this.date = date; 
    this.topic_id = topic_id; 
  }

  /* POST /posts ---- Create new post  */ 
  static addPost(content, author, date, topic_id) {
    return dbConnect.execute("INSERT INTO post(content, author, date, topic_id) VALUES (?, ?, ?, ?)", [content, author, date, topic_id]);
  }
  
  /* GET /posts/1 ---- Access one post  */ 
  static getPostByBId(id) {
    return dbConnect.execute("SELECT * FROM post WHERE ID=?", [id]);
  }
  /* GET /posts ---- Access all post with the topic associated  */ 
  static getAllPost() {
    return dbConnect.execute("SELECT * FROM topic INNER JOIN post ON topic.id = topic_id");
  }
  /* PUT /posts ---- Edit one existing post with all fields */ 
  static updatePost(id, content, author, date, topic_id) {
    return dbConnect.execute("UPDATE post SET content = ?, author = ?, date = ?, topic_id= ? WHERE id = ?", [content, author, date, topic_id, id])
  }
  /* DELETE /posts/1 ---- Delete one existing post */ 
  static deletePost(id) {
    return dbConnect.execute('DELETE FROM post WHERE id = ?', [id])
  }

}