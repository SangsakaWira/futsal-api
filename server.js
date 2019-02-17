// packages
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const path = require("path")

// configuration
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","hbs")
app.use(express.static(__dirname+"/views"))
app.use(express.static(__dirname + '/public'));
let field = require("./model/field")
let port = process.env.PORT || 3000

app.get("/",function(req,res){
    res.render("index")
})

app.get("/new", function (req, res) {
    res.render("new")
})

app.get("field/edit/:id",function(req,res){
    field.findById(req.params.id,function(err,data){
        if(err){
            res.send("Id is not recognized")
        }else{
            res.redirect("detail")
        }
    })
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
            res.redirect("/field")
        }
    })
})

app.listen(port,function(){
    console.log("Server is running")
})