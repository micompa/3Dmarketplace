const express=require("express")
const router=express.Router();
const {getProducts} = require("../controllers/productsController")
router.route('/productos').get(getProducts)
module.exports=router;