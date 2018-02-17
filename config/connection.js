var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "wftuqljwesiffol6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,

    user: "wi7gibbb812f1h7j",
    password: "lja0t3kscu4mch3o",
    database: "burgers_db"
});


 module.exports = connection;

