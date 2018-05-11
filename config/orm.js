var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") !== -1) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

var orm = {
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";

        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: function (tableName, cols, vals, cb) {
        // "INSERT INTO cakes(name, eaten) VALUES("Chocolate", false);"
        var queryString = "INSERT INTO " + tableName + "(" + cols.toString() + ") VALUES(" + printQuestionMarks(vals.length) + ");";

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

    updateOne: function (tableName, objColVals, condition, cb) {
        var queryString = "UPDATE " + tableName + " SET " + objToSql(objColVals) + " WHERE " + condition + ";";

        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

    deleteOne: function(tableName, condition, cb){
        var queryString = "DELETE FROM " + tableName + " WHERE " + condition + ";";

        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;