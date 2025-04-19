const e = require("express");
let mongo = require("mongoose");

require("dotenv").config();

let db_url = process.env.URL;
let datakakam =async function(){
    mongo.connect(db_url).then(()=>{
        console.log("Data connected")
    }).catch((e)=>{
        console.log(e)
    })
}

module.exports= datakakam