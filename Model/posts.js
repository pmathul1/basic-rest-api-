const {model,Schema}=require('mongoose')
const postSchema=new Schema(
    {
        email:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true
        },
        mobile:{
            type:String,
            required:true,
        }
        
    },
    {
        timestamps:true,
    }

)
module.exports=model("posts",postSchema);