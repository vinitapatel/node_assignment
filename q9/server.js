const mysql = require("mysql");
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: 'employeeDB'
});
const selectAllEmployees = () => {
return new Promise((resolve, reject) => {
con.query("SELECT * FROM empTB", (err, result, fields) => {
if (err) {
reject(err);
}
else {
resolve(result);
}
})
})
}
con.connect((err) => {
if (err) {
console.log("error: " + err)
} else {
//inserting record in employee table
con.query("INSERT INTO empTB values(null,'jenil','jenil@gmail.com',21)", (err, result) => {
if (err) {
console.log("error: " + err)
} else {
console.log("record inserted")
}
})
selectAllEmployees().then(result => {
console.log(result)
}).catch(err => {
console.log("error: " + err)
})
}
})
