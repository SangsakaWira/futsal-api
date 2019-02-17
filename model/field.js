const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/field",{useNewUrlParser:true})

const fieldSchema = mongoose.Schema({
    title:String,
    img:{
        type:String
    },
    desc:String,
    facilities:String
})

let field = mongoose.model("Field",fieldSchema)

module.exports = field