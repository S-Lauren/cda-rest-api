const dbConnect = require("./db"); 



module.exports = class Topic {

  constructor(id, title) {
    this.id = id; 
    this.title = title; 
  }

  static getAll() {
    return dbConnect.execute("SELECT * FROM topic"); 
  }
  static addTopic(title) {
    return dbConnect.execute("INSERT INTO topic(title) VALUES(?)", [title]); 
  }

  static updateTopic(id, title) {
    return dbConnect.execute("UPDATE topic SET title = ? WHERE id = ?", [title, id])
  }
  static delete(id) {
    return dbConnect.execute('DELETE FROM topic WHERE id = ?', [id])
  }

}


