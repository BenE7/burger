var orm = require ("../config/orm.js")

var burgers = {
    all: function (cb){
        orm.selectAll("Burgers", function(res){
            cb(res);
        });
    },

    insert: function (cb){
        orm.insertOne("Burgers", function(res){
            cb(res);
    });
  },

    update: function (cb){
        orm.updateOne("Burgers", function(res){
            cb(res);

        });

    }
}

module.exports = burgers;