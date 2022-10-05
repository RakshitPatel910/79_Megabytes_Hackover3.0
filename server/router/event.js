const express = require('express')
const router = express.Router();

require('../db/conn')

const Event = require("../model/eventSchema");

router.get("/getAllEvent", async (req, res) => {
  const data = await Event.find();
  // console.log(data)
  return res.json({ data: data, status: true });
});

router.post('/likeEvent',async (req,res)=>{
    const {eventName,custId} = req.body
    const data = await Event.findOne({eventName:eventName})
    let count = 0
    if(data){
        data.like.map((e)=>{
            if(e == custId){
                count++
                return res.json({message:"Already liked",status:false})
            }
        })
    }else{
        return res.json({message:"Event doesnt exist",status:false})
    }
    if(count === 0){
        data.like.push(custId)
        await Event.findOneAndUpdate({eventName:eventName},data)
        return res.json({message:"Successfully liked",status:true})
    }
})

router.post('/totalLike',async(req,res)=>{
    const {eventName} = req.body
    let count = 0
    const data = await Event.findOne({eventName:eventName})
    if(data){
        data.like.map(e=>{count++})
        return res.json({likes:count,status:true})
    }
    else{
        return res.json({message:"Event does not exits",status:false})
    }
})

module.exports = router;