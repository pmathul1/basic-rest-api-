const express=require('express');
const cors =require("cors")
const bodyParser=require("body-parser")
const {connect}=require("mongoose")
const{success,error}=require('consola')
const {PORT,DB}=require("./Config/index")
const postroutes=require('./Routes/posts')

const app=express()


// ---------------middlewares---------------------

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// ---------------middlewares ends---------------------



//--------------------routes strat---------------------------
app.use("/api",postroutes)     
//--------------------routes ends----------------------------


let StartApp= async ()=>
{
    try
    {
        await connect(DB,
            {useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true})
            success({message:`succesfully database connected ${DB}`,badge:true})
         app.listen(PORT,err=>{
               if(err)
                {
                    error({message:err,badge:true})
                  
                }
                else
                {
                    success({message:`listening to port ${PORT}`,badge:true})
                }
                                })
    }
  
    catch(err)
    {
        error({message:err,badge:true})
    }
};
StartApp();