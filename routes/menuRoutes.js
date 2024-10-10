const express=require('express')
const router=express.Router()
const MenuItem=require('../models/Menu')
router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find()
        console.log('data fetched')
        res.status(200).json(data)

    }catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'})

    }
})
router.post('/',async (req,res)=>{
    try{
        const data=req.body
        const newMenu=new MenuItem(data)
        const response=await newMenu.save()
        console.log('data saved')
        res.status(200).json(response)


    }catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'})

    }


})
router.get('/:taste',async(req,res)=>{
    try{
        const taste=req.params.taste
        if(taste=='sweet'||taste=='spicy'||taste=='sour'){
            const response=await MenuItem.find({taste:taste})
            console.log('response fetched')
            res.status(500).json(response)
        }else{
            res.status(404).json({error:'invalid work type'})
        }




    }catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'})
    }
})
module.exports=router

