var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (i = 0; i < num; i++) {
        arr.push = ("?");

    }
    return arr.toString();
};

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key]; {
            if (Object.hasOwnProperty.call(ob, key)) {

                if (typeof value === "string" && value.indexOf(" ") >= 0) {
                    value = "'" + value + value + "'";
                }
                arr.push(key + "=" + value);



                // var value = ob[key];
                // const element = array[i];
            }
        }
        return arr.toString();
    };
};

    var orm = {
        selectAll: function (tableInput, cb) {
            var queryString = "SELECT * FROM" + tableInput + ";";

            connection.query(queryString, function (err, result) {
                if (err) {
                    throw err;
                }

                cb(result);
            });
        },

        insertOne: function tableInput (cols, vals, cb) {
            var queryString = "INSERT INTO " + table;
    
            queryString += " (";
            queryString += cols.toString();
            queryString += ") ";
            queryString += "VALUES (";
            queryString += printQuestionMarks(vals.length);
            queryString += ") ";
    
            console.log(queryString);
    
    
    
            connection.query(queryString, function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
        },
    
        updateOne: function tableInput  (objColVals, condition, cb) {
            var queryString = "UPDATE" + table;
    
            queryString += " SET ";
            queryString += objToSql(objColVals);
            queryString += "WHERE ";
            queryString += condition;
    
    
            console.log(queryString);
    
            connection.query(queryString, function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
        },
    
        deleteOne: function tableInput (condition, cb) {
            var queryString = "DELETE FROM " + table;
            queryString += "WHERE ";
            queryString += condition;
    
            console.log(queryString);
    
            connection.query(queryString, function (err, res) {
                if (err) {
                    throw err
                }
                cb(result);
            });
        }
    
    };

    
module.exports = orm;