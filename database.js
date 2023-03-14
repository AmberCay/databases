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

// let getNL = "SELECT first_name, last_name FROM students;"
// connection.query(getNL, (err, res) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('Student\'s first & last names');
//         console.log(res);
//     }
// });

// let getT = "SELECT * FROM teachers;"
// connection.query(getT, (err, res) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('Teacher data');
//         console.log(res);
//     }
// });

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

// let pass = "UPDATE marks SET mark = 5 WHERE mark < 6 ;"
// connection.query(pass, (err, res) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('student marks under 5 set to 5');
//         console.log(res);
//     }
// });

// get avg for subject 1

let getAvgS1 = "select avg(mark) as subject1_avg from marks where subject_id =1 ;"
connection.query(getAvgS1, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('Average marks for subject 1:');
        console.log(res);
    }
});

// get number of students

let countS = "SELECT COUNT(*) AS nStudents FROM students ;"
connection.query(countS, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('Number of students:');
        console.log(res);
    }
});

// get columns of groups

let gColumns = "SELECT Column_name FROM information_schema.columns WHERE table_name = 'GROUPS';"
connection.query(gColumns, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('Columns in groups:');
        console.log(res);
    }
});

// get students of current year

let currentS = "SELECT * FROM school.students WHERE join_year > '2022-12-31';"
connection.query(currentS, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('Students that joined in 2023:');
        console.log(res);
    }
});

// calc teacher by subject

let teachByS = "SELECT subject_id, Count(*) as teacher_by_sub from subject_teacher group by subject_id;"
connection.query(teachByS, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('teachers by subject:');
        console.log(res);
    }
});

// get students and marks when students id 1-20 or mark over 8 from last year

let markConditional = "SELECT student_id, mark from marks where (student_id between 1 and 20) or (mark >= 8 and (mark_date between '2021-12-31' and '2023-01-01'));"
connection.query(markConditional, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('students and marks when students id 1-20 or makr 0over 8 from last year:');
        console.log(res);
    }
});

//get abg mark by subject of last year 

let lYSubMark = "SELECT subject_id, AVG(mark) from marks where mark_date between '2021-12-31' and '2023-01-01' group by subject_id;"
connection.query(lYSubMark, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('student\'s avg mark of last year:');
        console.log(res);
    }
});


// get student's avg mark of last year

let lYMark = "SELECT student_id, AVG(mark) from marks where mark_date between '2021-12-31' and '2023-01-01' group by student_id;"
connection.query(lYMark, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('student\'s avg mark of last year:');
        console.log(res);
    }
});

