var orm = require ("../config/orm.js")

var burgers = {
    all: function (cb){
        orm.selectAll("Burgers", function(res){
            cb(res);
        });
    },

    insert: function (name, cb){
        orm.insertOne("Burgers", ["burger_name", "devoured"],[name, false], function(res){
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