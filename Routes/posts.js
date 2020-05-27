const express=require('express')
const router=express.Router()
const Posts=require('../Model/posts')





// >>>>>>>>>>>>>>>>>>>>>>>get routes starts<<<<<<<<<<<<<<<<<<<<<<<<<<<
 
////////////all data//////////////////////
router.get("/get-post",async(req,res)=>{
    try
    {
        let data= await Posts.find({})
        res.status(200).json({data,message:"all datas are fetched"})
    } 
    
    catch(err)
    {
        if(err)
        throw err;
    
    }
})


/////////////specific data///////////////////
router.get("/get-post/:id",async (req,res)=>{
    try
    {
        let data =await Posts.findOne({_id:req.params.id})
        res.status(200).json({data,message:`data  found `})

    }
    catch(err)
    {
        throw err
    }
})

// <<<<<<<<<<<<<<<<<<<<<get routes ends>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// >>>>>>>>>>>>>>>>>>>>>>>post routes starts<<<<<<<<<<<<<<<<<<<<<<<<<<<

router.post("/create-post",async(req,res)=>
{
    
    try
    {

        let {email,name,mobile}=req.body
        let newPost={email,mobile,name}
        await new Posts(newPost).save()

        // let {email,name,mobile}=req.body
        // await new Posts({email,name,mobile}).save()
        res.status(201).json({message:"suucessfully post created"})
    }
    catch(err)
    {
        if(err)
        throw err
    }
        
    
})
// <<<<<<<<<<<<<<<<<<<<<post routes ends>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// >>>>>>>>>>>>>>>>>>>>>>>put routes starts<<<<<<<<<<<<<<<<<<<<<<<<<<<
router.put("/edit-post/:id",async(req,res)=>{
    try
    {
        let{email,mobile,name}=req.body
        let newvalue={email,mobile,name}
        let data=await Posts.findByIdAndUpdate(req.params.id,newvalue)
        res.status(200).json({data,message:"data updated"})
    }
    catch(err)
    {
        if(err)
        throw err
    }
   
})
// <<<<<<<<<<<<<<<<<<<<<put routes ends>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// >>>>>>>>>>>>>>>>>>>>>>>delete routes starts<<<<<<<<<<<<<<<<<<<<<<<<<<<

router.delete("/delete-post/:id",async(req,res)=>{
    try
    {
         await Posts.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({message:"data deleted"})

    }
    catch
    {

    }
})
// <<<<<<<<<<<<<<<<<<<<<delete routes ends>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




module.exports=router;