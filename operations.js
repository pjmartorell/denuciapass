const { query } = require("express");
const mysql = require("mysql");

function insert(connection, callback) {
  let insertQuery = "INSERT INTO clientes(name, email) VALUES ('juan','pedro')";

  connection.query(insertQuery, function (err, result) {
    if (err) throw err;
    callback(result);
    connection.end();
  });
}

function read(connection, callback) {
  connection.query("SELECT * FROM clientes", function (err, result) {
    if (err) throw err;
    callback(result);
    connection.end();
  });
}

module.exports = { insert, read };
