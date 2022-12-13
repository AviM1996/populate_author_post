const mongoose=require("mongoose")
const Schema=mongoose.Schema

const postSchema= new mongoose.Schema({
    postHeading:{
        type:String,
        require:true
    },
    postContent:{
        type:String,
        require:true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: "author"
    }
})

const postModel=mongoose.model("post",postSchema)
module.exports=postModel