const Sequelize = require('sequelize')
const Model = Sequelize.Model

class Warehouse extends Model{}
function init_Warehouse(sequelize) {
    Warehouse.init(
        {
            warehouse_id: {type:Sequelize.INTEGER, allowNull:false, primaryKey:true},
            address: {type:Sequelize.STRING, allowNull:false},
            phone: {type:Sequelize.STRING, allowNull:false}
        },
        {sequelize, modelName: 'Warehouse', tableName: 'warehouse', timestamps: false}
    )
}

module.exports = (sequelize) => {init_Warehouse(sequelize); return Warehouse;}