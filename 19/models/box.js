const Sequelize = require('sequelize')
const Model = Sequelize.Model
const Warehouse = require('./warehouse')(sequelize)

class Box extends Model{}
function init_Box(sequelize) {
    Box.init(
        {
            box_id: {type:Sequelize.INTEGER, allowNull:false, primaryKey:true},
            warehouse_id: {type:Sequelize.INTEGER, allowNull:false, references:{model:Warehouse, key:'warehouse_id'}},
            length: {type:Sequelize.INTEGER, allowNull:false},
            width: {type:Sequelize.INTEGER, allowNull:false},
            height: {type:Sequelize.INTEGER, allowNull:false}
        },
        {sequelize, modelName: 'Box', tableName: 'box', timestamps: false}
    )
}

module.exports = (sequelize) => {init_Box(sequelize); return Box;}