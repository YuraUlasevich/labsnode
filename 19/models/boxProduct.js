const Sequelize = require('sequelize')
const Model = Sequelize.Model
const Box = require('./box')(sequelize)
const Product = require('./product')(sequelize)

class BoxProduct extends Model{}
function init_BoxProduct(sequelize) {
    BoxProduct.init(
        {
            box_id: {type:Sequelize.INTEGER, allowNull:false, references:{model:Box, key:'box_id'}},
            product_id: {type:Sequelize.INTEGER, allowNull:false, references:{model:Product, key:'product_id'}}
        },
        {sequelize, modelName: 'BoxProduct', tableName: 'box_product', timestamps: false}
    )
}

module.exports = (sequelize) => {init_BoxProduct(sequelize); return BoxProduct;}