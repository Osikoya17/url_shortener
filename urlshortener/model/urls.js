const{Schema, model}=require("mongoose")
const shortid = require("shortid")
const urlSchema = new Schema({
    longUrl:{
        type:Schema.Types.String,
        required:true
    },
    shortUrl:{
        type:Schema.Types.String,
        required:true,
        default: `Ola/${shortid.generate()}`
    }
},{
    timestamps:true
})

const Url = model("urls",urlSchema)

module.exports = Url;