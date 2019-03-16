// * Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require("../config/orm.js");

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var taco = {
    all: function(cb) {
        orm.all("tacos", function(res) {
            cb(res);
        });
    },
    create: function(columns, values, cb) {
        orm.create("tacos", columns, values, function(res) {
            cb(res);
        });
    },
    update: function(obj, condition, cb) {
        orm.update("tacos", obj, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("tacos", condition, function(res) {
            cb(res);
        });
    }
};
//     * Export at the end of the `burger.js` file.
module.exports = taco;
