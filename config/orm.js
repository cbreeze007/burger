//import require connection.js into orm.js file
var connection = require("./connection.js");

var orm =   {
  selectAll: function(burgers) {
    var queryString = "SELECT id, burger_name, devoured, date FROM ??";
    connection.query(queryString, [burgers], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(burgers, colName1, colName2, colName3, ColName4) {
    var queryString = "INSERT INTO ?? (??,??,??,??) VALUES (Entered_burger_name, 0, current_timestamp)";
    connection.query(queryString, [burgers, colName1, colName2, colName3, ColName4], function(err, result) {
      console.log(result);
    });
  },

};

module.exports = orm;
