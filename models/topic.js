const dbConnect = require("./db"); 


// Créer un constructeur
const Topic = (title) => {
  this.title = title;
}
// Créer les méthodes du CRUD
Topic.getAll = test => {
  dbConnect.query("SELECT * FROM topic", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err);
    }
    console.log("topic: ", res);
    result(res);
  });
};
// Dans chaque méthodes du CRUD va se trouver une requête SQL
module.exports = Topic; 