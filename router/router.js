const express=require('express')
const Router=express.Router()

const homeController=require("../controller/controller")
 Router.get("/",homeController.index)
 Router.get("/showAuthor",homeController.show_Author)
 Router.post("/addAuthor",homeController.create_Author)
 Router.get("/showPost",homeController.show_Post)
 Router.post("/addPost",homeController.create_Post)

module.exports=Router