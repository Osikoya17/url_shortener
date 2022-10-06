const  express = require('express')
const { PORT, APP_NAME, MONGO_URI} = require('./config/env')
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
const id = require("shortid")
const Url = require('./model/urls')

// console.log(`OLA/${id.generate()}`);

app.set("view engine" , 'pug')
app.set("views", "./views")
app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))

mongoose.connect(MONGO_URI,{},(err)=>{
    if (err) console.log("Please Connect to the Internet");
    else console.log("database is connected");
})

app.get('/', async(req, res) =>{
    const urls = await Url.find({})
    console.log(urls);
    res.status(200).render("urlshortener",{urls})
})
app.post("/createUrls",async(req,res)=>{
    // const{url} = req.body.url
    console.log(req.body.url);
    await Url.create({longUrl:req.body.url})
    res.redirect("/")

})
app.listen(PORT, () => console.log(`${APP_NAME} is running on ${PORT}!`))