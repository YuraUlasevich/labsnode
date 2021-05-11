const Sequelize = require('sequelize')
const Model = Sequelize.Model

class Product extends Model{}
function init_Product(sequelize) {
    Product.init(
        {
            product_id: {type:Sequelize.INTEGER, allowNull:false, primaryKey:true},
            name: {type:Sequelize.STRING, allowNull:false},
            length: {type:Sequelize.INTEGER, allowNull:false},
            width: {type:Sequelize.INTEGER, allowNull:false},
            height: {type:Sequelize.INTEGER, allowNull:false}
        },
        {sequelize, modelName: 'Product', tableName: 'product', timestamps: false}
    )
}

module.exports = (sequelize) => {init_Product(sequelize); return Product;}