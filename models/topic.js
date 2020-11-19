const dbConnect = require("./db"); 



module.exports = class Topic {

  /* Initialize fields */ 
  constructor(id, title) {
    this.id = id; 
    this.title = title; 
  }

  /* GET topics/1 ---- Access all topics  */ 
  static getAll() {
    return dbConnect.execute("SELECT * FROM topic"); 
  }
   /* GET topics/1 ---- Access one topic  */ 
  static getById(id) {
    return dbConnect.execute("SELECT * FROM topic WHERE ID = ?", [id]); 
  }

  /* GET topics/1/posts ---- All posts from one topic */ 
  static getAllPostFromTopic(id) {
    return dbConnect.execute("SELECT * FROM post WHERE topic_id = ?", [id]); 
  }
  /* POST topics/ ---- Create a new topic  */ 
  static addTopic(title) {
    return dbConnect.execute("INSERT INTO topic(title) VALUES(?)", [title]); 
  }
  /* PUT /topics/1 ---- Update existing topic  */ 
  static updateTopic(id, title) {
    return dbConnect.execute("UPDATE topic SET title = ? WHERE id = ?", [title, id])
  }
  /* DELETE /topics/1 ---- Delete existing topic  */ 
  static delete(id) {
    return dbConnect.execute('DELETE FROM topic WHERE id = ?', [id])
  }

}


