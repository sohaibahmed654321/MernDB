let express= require("express");
let route= express.Router();
let funa=require("../Functions/Logic")

route.get("/h",funa.home)
route.post("/reg",funa.register_user)

module.exports=route