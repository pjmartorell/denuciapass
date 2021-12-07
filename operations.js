const mysql = require("mysql");

function insert(connection, callback) {
  let insertQuery =
    "INSERT INTO clientes(EMPRESA, DIRECCIÓN, POBLACIÓN,TELÉFONO, RESPONSABLE, HISTORIAL) VALUES ('Dpass', 'la mia', 'logroño', '25', 'yo', 'no')";
  connection.query(insertQuery, function (err, result) {
    if (err) throw err;
    callback(result);
  });
}

module.exports = { insert };
