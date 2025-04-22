let mongo = require("mongoose");

let user_collection = mongo.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    pass:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        default:"PAkistan"

    },
    created_at:{
        type:Date,
        default:Date.now
    },
})
module.exports = mongo.model("user_data",user_collection);