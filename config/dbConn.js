const mysql = require('mysql')

//establish connection
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'M1hl@l1!',
    database: 'epicdev-db',
    multipleStatements: true
  })

  //verify connection
dbConn.connect(function (error) {
    if (error) {
      console.log('Error Found')
    }
    else {
      console.log('Connected')
    }
  })

  module.exports = dbConn;