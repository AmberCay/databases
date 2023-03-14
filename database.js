const mysql = require('mysql2');
let connection = mysql.createConnection(
    {
        host        :"localhost",
        user        :"root",
        password    :"Amber160897",
        database    :"school"
});

connection.connect((error) => {
    if(error){
        console.log(error);
    }
    else{
        console.log('Connected correctly.');
    }
});

// add column

// let addC = "ALTER table direccion ADD COLUMN puerta INT;"
// connection.query(addC, (err, res) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('added coloumn');
//         console.log(res);
//     }
// });

// drop column

// let dropC = "ALTER table direccion DROP COLUMN puerta;"
// connection.query(dropC, (err, res) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('Column deleted');
//         console.log(res);
//     }
// });

// drop table

// let dropT = "DROP table direccion;"
// connection.query(dropT, (err, res) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('Table deleted');
//         console.log(res);
//     }
// });

// set marks to 0

// let upD = "UPDATE marks SET mark = 0"
// connection.query(upD, (err, res) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('Set marks to 0');
//         console.log(res);
//     }
// });

let getNL = "SELECT first_name, last_name FROM students;"
connection.query(getNL, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('Student\'s first & last names');
        console.log(res);
    }
});

let getT = "SELECT * FROM teachers;"
connection.query(getT, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('Teacher data');
        console.log(res);
    }
});

// delete marks older than 10 years

// let delX = "DELETE FROM  marks WHERE date < '2013-03-14'"
// connection.query(delX, (err, res) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('marks older than 10 years have been deleted');
//         console.log(res);
//     }
// });

let pass = "UPDATE marks SET mark = 5 WHERE mark < 6 ;"
connection.query(pass, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('student marks under 5 set to 5');
        console.log(res);
    }
});