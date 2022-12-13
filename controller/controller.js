const authorModel=require("../model/author")
const postModel=require("../model/post")

exports.index = (req, res) => {
    postModel.find().populate("author").exec((err, data) => {
        if (!err) {
            //console.log(data);     
            res.render("index", {
                title: "Home",
                authorData: data
            })
        }
        console.log(data);
    })
}

exports.show_Author=(req,res,next)=>{
    res.render("author",{
        title:"Author Page"
    })
}

exports.create_Author=(req,res,next)=>{
    const Author= new authorModel({
        authorName:req.body.name,
        authorEmail:req.body.email,
        authorPhone:req.body.phone
    });
    Author.save().then((result)=>{
        console.log(result,"Author Add succesfully");
        res.redirect("/")
    }).catch((err)=>{
        console.log(err,"Author not added")
        res.redirect("/showAuthor")
    })
}

exports.show_Post=(req,res,next)=>{
    authorModel.find().then((result)=>{
        res.render("post",{
            title:"post Page",
            authors:result
        })
    })  
}

exports.create_Post=(req,res,next)=>{
    const Post= new postModel({
        postHeading:req.body.heading,
        postContent:req.body.content,
        author:req.body.author
    });
    Post.save().then((result)=>{
        console.log(result,"Post Add succesfully");
        res.redirect("/")
    }).catch((err)=>{
        console.log(err,"post not added")
        res.redirect("/showPost")
    })
}

