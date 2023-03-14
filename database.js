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

let addC = "ALTER table direccion ADD COLUMN puerta INT;"
connection.query(addC, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('added coloumn');
        console.log(res);
    }
});