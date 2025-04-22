let express= require("express");
let r = require("./Routing/route");
let db = require("./Connect");
let user = require("./Collection/User")
let cors = require("cors");
require("dotenv").config()

let port = process.env.PORT ||1000
let application = express();
application.use(express.json())

application.use("/Web/",r);

//Add data collection
application.use(cors());

let add_user=async function(){
    try{
        user.create({
            name:"ahmed",
            email:"ahmed@gmal",
            pass:"123",
            age:25,
            country:"PAkistan"

        })
        console.log("User Added")
    }catch(error){
        console.log(error)
    }
}

db().then(()=>{
    // add_user()
    application.listen(port,()=>{
        console.log(`server started at http://localhost:${port}/Web/`)

})


}).catch(()=>{
    console.log(e)
})