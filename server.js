const express = require('express')
const bodyParser = require('body-parser')

const dbConn = require('./config/dbConn')

//routes
const SupplierRoute = require("./routes/supplier")

var app = express()

app.use(bodyParser.json())

//route to supplier
app.use("/supplier", SupplierRoute)

app.listen(3000, () => {
  console.log('EpicDev API is ready on port: ' + '3000', 'https://localhost:3000')
})