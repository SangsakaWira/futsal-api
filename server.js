// packages
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

// configuration
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static(__dirname+"/views"))
app.use(express.static(__dirname + "/public"))
let field = require("./model/field")
let port = process.env.PORT || 3000

app.get("/",function(req,res){

})

app.route("/field").get(function(req,res){
    field.find(function (err, data) {
        if (err) {
            res.send("Something is wrong")
        }
        else {
            res.send(data)
        }
    })
}).post(function (req, res) {
    field.create(req.body, function (err, data) {
        if (err) {
            res.send("Something is wrong")
        } else {
            res.redirect("/")
        }
    })
})

app.get("/field/new", function (req, res) {
    res.render()
})

app.listen(port,function(){
    console.log("Server is running")
})