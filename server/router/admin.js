const express = require('express')
const router = express.Router()

const Event = require("../model/eventSchema");
const Cust = require("../model/customerSchema");
const { findOneAndDelete } = require('../model/eventSchema');

require("../db/conn");

router.post('/disapprove',async (req,res)=>{
    const {eventName} = req.body
    const data  = await Event.findOne({eventName:eventName})
    if(data){
        data.approved = false
        await Event.findOneAndUpdate({eventName:eventName},data)
        return res.json({message:"approved",status:true})
    }
    else{
        return res.json({message:"Event does not exits",status:false})
    }
})

router.post('/approve',async (req,res)=>{
    const {eventName} = req.body
    const data  = await Event.findOne({eventName:eventName})
    if(data){
        data.approved = true
        await Event.findOneAndUpdate({eventName:eventName},data)
        return res.json({message:"approved",status:true})
    }
    else{
        return res.json({message:"Event does not exits",status:false})
    }
})

router.post('/deleteCust',async (req,res)=>{
    const {email} = req.body
    const data  = await Cust.findOne({email:email})
    if(data){
        await findOneAndDelete({email})
        return res.json({message:"Successfully deleted customer",status:true})
    }else{
        return res.json({message:"Cannot delete",status:false})
    }
})


module.exports = router
