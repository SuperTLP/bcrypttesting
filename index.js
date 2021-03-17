
const express = require("express")
const mysql = require("mysql")
const app = express()
const db=mysql.createConnection({
    user: 'root',
    password: '1234',
    multipleStatements: true,
    host: "localhost",
    database: "windows_testing"
})
db.connect((error) => (console.log(error)))

app.get("/testi", (req, res) => {
    let query = "insert into users (name, password, description) values ('kalja', 'olut','on hieno')"
    db.query(query)
    res.send("added")
})

app.listen(3000, () => {
    console.log("server started")
})
