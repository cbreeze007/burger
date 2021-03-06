// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 3306,
  host: "dbsql",
  user: "admin",
  password: "kellsa",
  database: "burger_db"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting to database: "+ connection.database + \n + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
