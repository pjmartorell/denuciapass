const { query } = require("express");
const mysql = require("mysql");

function insert(connection, data, callback) {
  let insertQuery = "INSERT INTO clientes(name, email) VALUES (?, ?)";
  let query = mysql.format(insertQuery, [data.name, data.email]);
  connection.query(query, function (err, result) {
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

function update(connection, data, callback) {
  const randomletters = Math.random().toString(36).substring(7);
  const newEmail = `${randomletters}@outlook.com`;
  let updateQuery = "UPDATE clientes SET email = ? WHERE name = ?";
  let query = mysql.format(updateQuery, [newEmail, data.name]);

  connection.query(query, function (err, result) {
    if (err) throw err;
    callback(result);
    connection.end();
  });
}

function remove(connection, data, callback) {
  let removeQuery = "DELETE FROM clientes WHERE name = ?";
  let query = mysql.format(removeQuery, [data.name]);

  connection.query(query, function (err, result) {
    if (err) throw err;
    callback(result);
    connection.end();
  });
}

module.exports = { insert, read, update, remove };
