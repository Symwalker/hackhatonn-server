const mongoose = require("mongoose")
// const autoIncrement = require("mongoose-auto-increment")
const schema = mongoose.Schema({
    name:{
        type  : String
    },
    type :{
        type :  String
    } ,
    longitute :{
        type :  Number
    } ,
    latitute :{
        type :  Number
    } ,
})


// autoIncrement.initialize(mongoose.connection)
// schema.plugin(autoIncrement.plugin, 'user')

const ReqModel = mongoose.model("request" , schema)
module.exports = ReqModel