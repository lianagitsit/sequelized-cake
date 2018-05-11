var orm = require("../config/orm.js");

var cake = {
    selectAll: function(cb){
        orm.selectAll("cakes", res => {
            cb(res);
        })
    },

    insertOne: function(cols, vals, cb){
        orm.insertOne("cakes", cols, vals, cb, res => {
            cb(res);
        })
    },

    updateOne: function(objColVals, condition, cb){
        orm.updateOne("cakes", objColVals, condition, res => {
            cb(res);
        })
    },

    deleteOne: function(condition, cb){
        orm.deleteOne("cakes", condition, res => {
            cb(res);
        })
    }
}

module.exports = cake;