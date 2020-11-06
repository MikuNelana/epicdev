const express = require('express')
const Router = express.Router();
const dbConn = require('../config/dbConn')
//const objectResponse = require('../objectRespose')

Router.get('/', (req, res) => {
    dbConn.query('SELECT * FROM supplier', (error, rows, fields) => {
        if (!error) {
            console.log("Success!")
            res.send(rows);
        }
        else {
            console.log(error);
        }
    })
})

//Router to GET specific supplier from the MySQL database
// Router.get('/supplier/:id', (req, res) => {
//     dbConn.query('SELECT * FROM supplier WHERE idsupplier = ?', [req.params.idsupplier], (err, rows, fields) => {
//         if (!error){
//             console.log("Success! Here is one record: ")
//             res.send(rows);
//         }
//         else
//             console.log(error);
//     })
// });

//Router to INSERT/POST a supplier detail
// Router.post('/supplier', (req, res) => {
//     let supplier = req.body;
//     var sql = "SET @idsupplier = ?; SET @supplierName = ?; SET @supplierLocation = ?; SET @supplierContact = ?; CALL supplierAddorEdit(@idsupplier, @supplierName, @supplierLocation, @supplierContact); ";
//     dbConn.query(sql, [supplier.idsupplier, supplier.supplierName, supplier.supplierLocation, supplier.supplierContact], (err, rows, fields) => {
//         if (!error)
//             rows.forEach(element => {
//                 if (element.constructor == Array)
//                     res.send('New Supplier ID : ' + element[0].idsupplier);
//                 console.log(res)
//             });
//         else
//             console.log(error);
//     })
// });

//Router to UPDATE a supplier detail
// Router.put('/supplier', (req, res) => {
//     let learner = req.body;
//     var sql = "SET @learner_id = ?;SET @learner_name = ?;SET @learner_email = ?;SET @course_Id = ?; CALL learnerAddOrEdit(@learner_id, @learner_name, @learner_email, @course_Id); ";
//     dbConn.query(sql, [learner.learner_id, learner.learner_name, learner.learner_email, learner.course_Id], (err, rows, fields) => {
//         if (!err)
//             res.send('Learner Details Updated Successfully');
//         else
//             console.log(err);
//     })
// });


//Router to DELETE a supplier detail
// Router.delete('/supplier/:id', (req, res) => {
//     dbConn.query('DELETE FROM supplier WHERE idsupplier = ?', [req.params.idsupplier], (err, rows, fields) => {
//         if (!err)
//             res.send('Supplier Record deleted successfully.');
//         else
//             console.log(err);
//     })
// });

module.exports = Router