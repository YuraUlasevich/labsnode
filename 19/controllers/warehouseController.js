const {Warehouse, Box, Product, BoxProduct} = require("../models/orm").ORM()

exports.addWarehouse = function (request, response){
    response.render("create.hbs");
};
exports.getWarehouses = function(request, response){
    response.render("warehouses.hbs", {
        warehouses: Warehouse.findAll()
    })
};

exports.postWarehouse= function(request, response){
    global.sequelize.query("insert into warehouse(address, phone) values('"+
    req.body.address+"','"+req.body.phone+')',{type: global.sequelize.QueryTypes.INSERT})
    //Employee.create({emp_name: req.body.emp_name, position: req.body.position, team_id: req.body.team_id})
    .then(result => {
        Warehouse.findAll()
        .then(result2 => {
            res.render("arehouses.hbs", {layout: false, warehouses: result2, mes: "Warehouse successfully added"})
        })
    })
    .catch(err => {
        Warehouse.findAll()
        .then(result2 => {
            res.render("warehouses.hbs", {layout: false, warehouses: result2, err: err.message})
        })
    })
};