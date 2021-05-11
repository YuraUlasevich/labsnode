const Warehouse = require('./warehouse')(sequelize)
const Box = require('./box')(sequelize)
const Product = require('./product')(sequelize)
const BoxProduct = require('./boxProduct')(sequelize)

Warehouse.hasMany(Box, {as:'warehouses_boxes', foreignKey:'warehouse_id', sourceKey:'warehouse_id'})
BoxProduct.hasMany(Box, {as:'boxProducts_boxes', foreignKey:'box_id', sourceKey:'box_id'})
BoxProduct.hasMany(Product, {as:'boxProducts_products', foreignKey:'product_id', sourceKey:'product_id'})


exports.ORM = () => {
    
    return {Warehouse, Box, Product, BoxProduct}
}