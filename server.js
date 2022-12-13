const express=require("express");
const app=express()
const mongoose=require("mongoose")
mongoose.set('strictQuery', true)

app.set("view engine",'ejs')
app.set("views",'views')

app.use(express.urlencoded({extended:true}))

const homeRouter=require("./router/router")
app.use(homeRouter)

const dblink="mongodb+srv://avi1996:7QzONiaFux6lhcRz@cluster0.vfnrjxd.mongodb.net/Populate_project"

const port=process.env.PORT||1996
mongoose.connect(dblink,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((result)=>{
    app.listen(port,()=>{
        console.log(`server is connected at http://localhost:${port}`);
        console.log(`DataBase is connected `);
    })
}).catch((err)=>{
    console.log(err);
})
