const express = require('express')
const router = express.Router()

const Event = require("../model/eventSchema");

require("../db/conn");

router.post('/disapprove',async (req,res)=>{
    const {eventName} = req.body
    const data  = await Event.findOne({eventName:eventName})
    if(data){
        data.approved = false
        await Event.find
        return res.json({message:"approved",})
    }
    else{
        return res.json({message:"Event does not exits",status:false})
    }
})


module.exports = router
