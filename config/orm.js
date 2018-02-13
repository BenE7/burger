var connection = require ("../config/connection.js")

var orm = {
    selectAll: function (Burgers, cb) {
        var queryString = "SELECT * FROM " + Burgers + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (Burgers, cols, vals, cb) {
        var queryString = "INSERT INTO " + Burgers;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += vals.toString();
        // queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function (Burgers, col, val, condition, cb) {
        var queryString = "UPDATE " + Burgers;

        queryString += " SET ";
        queryString += "col";
        queryString += "val";
        // queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;