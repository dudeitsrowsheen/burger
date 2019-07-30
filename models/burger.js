var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", col, vals, function(res) {
            cb(res);

        });
    },
};

update: function(objColsVals, condition, cb) {
    orm.update
}
