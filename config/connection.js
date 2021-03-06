//* Inside the `connection.js` file, setup the code to connect Node to MySQL.

//* Export the connection.

// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Duk3L3t@",
  database: "tacos_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  console.log("connected on port: " + connection.port);
});

// Export connection for our ORM to use.
module.exports = connection;
