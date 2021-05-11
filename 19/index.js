const express = require("express");
const path = require("path")
const bodyParser = require("body-parser")
const hbs = require("express-handlebars").create({extname:".hbs"})


const Sequelize = require("sequelize")
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    return this._applyTimezone(date, options).format("YYYY-MM-DD HH:mm:ss.SSS");
}
global.sequelize = new Sequelize("warehouse", "postgres", "", {host:"localhost", dialect:"postgres"})


const app = express()
app.engine(".hbs", hbs.engine)
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname, "views"))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())  //почему без этого тело PUT пустое, а POST нормально?



const warehouseRouter = require("./routes/warehouseRouter");
const homeRouter = require("./routes/homeRouter");





app.use("/warehouses", warehouseRouter);
app.use("/", homeRouter);
 

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});
 
app.listen(3000);