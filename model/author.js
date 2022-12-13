const mongoose=require("mongoose")
const Schema=mongoose.Schema

const authorSchema= new Schema({
    authorName:{
        type:String,
        require:true
    },
    authorEmail:{
        type:String,
        require:true
    },
    authorPhone:{
        type:String,
        require:true
    }
})

const AuthorModel=mongoose.model("author",authorSchema)
module.exports=AuthorModel