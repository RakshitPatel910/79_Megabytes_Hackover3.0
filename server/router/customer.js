const express = require('express')
const router = express.Router();

const Cust = require("../model/customerSchema");
require("../db/conn");

router.get('/allCust',async (req,res)=>{
    const data  = await Cust.find({})
    return res.json({data:data,status:true})
})

router.post("/getCust", async (req, res) => {
  const { email } = req.body;
  const data = await Cust.findOne({ email: email });
  data.password = "" 
  if (data) {
    return res.json({ event: data, status: true });
  } else {
    return res.json({ message: "Customer does not exists", status: false });
  }
});

router.post('/custEvents',async (req,res)=>{
    const {email} = req.body
    const data  = await Cust.findOne({email:email})
    if(data){
        return res.json({event:data.eventList,status:true})
    }else{
        return res.json({message:"Customer does not exists",status:false})
    }
})

router.post('/regEvent',async (req,res)=>{
    const {eventName,email,date} = req.body
    let count = 0
    const data = await Cust.findOne({email:email})
    if(data){
        data.eventList.map(e=>{
            if(e.eventName == eventName){
                count++
                return res.json({messge:"Already register to event",status:false})
            }
        })
    }else{
        return res.json({message:"Customer does not exist",status:false})
    }

    if(count === 0){
        const newEvent = {
            eventName:eventName,
            date:date
        }
        data.eventList.push(newEvent)
        await Cust.findOneAndUpdate({email},data)
        return res.json({message:"Event registered",status:true})
    }

})



module.exports = router;