const express = require("express")

const warehouseController = require("../controllers/warehouseController");
module.exports = () => {
    var router = express.Router()
    router.get("/", warehouseController.getWarehouses())
    router.post("/postWarehouse", warehouseController.postWarehouse())
//    router.delete("/delete/:parm", warehouseController.delete)
//    router.put("/edit", warehouseController.edit)
    return router
}