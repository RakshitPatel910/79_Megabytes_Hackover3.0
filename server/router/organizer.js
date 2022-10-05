const express = require("express");
const { trusted } = require("mongoose");
const router = express.Router();

require("../db/conn");

const Cust = require("../model/customerSchema");
const { events } = require("../model/eventSchema");
const Event = require('../model/eventSchema')

router.post('/events',async (req,res)=>{
    const {organizerId} = req.body
    let event = []
    const data = await Event.find({})
    data.map(e=>{
        if(e.organizerId == organizerId){
            event.push(e)
        }
    })

    return res.json({event:events,status:true})
})

router.post('/addEvent',async (req,res)=>{
    const {organizerId,
    eventName,
    location,
    date,
    seat,
    availSeat,
    image,
    price,
    approved} = req.body

    const data = await Event.findOne({eventName:eventName})
    if(data){
        return res.json({message:"Event already exist",status:false})
    }
    else{
        const newData = new Event({
          organizerId,
          eventName,
          location,
          date,
          seat,
          availSeat,
          image,
          price,
          approved,
        });
        console.log(newData)
        await newData.save().then(()=>{return res.json({message:"Event added",status:true})}).catch((err)=>{
            return res.json({message:"Event cannot be added",status:false})
        })
    }
})

router.post('/editEvent',async(req,res)=>{
    const {_id,organizerId,
    eventName,
    location,
    date,
    seat,
    availSeat,
    image,
    price,
    approved,prevName}  = req.body

    const oldName = prevName;

    const data = await Event.findOne({eventName:oldName})
    if(data){
        data.eventName = eventName,
        data.location = location,
        data.date = date,
        data.seat = seat,
        data.image = image,
        data.price = price

        await Event.findOneAndUpdate({eventName:oldName},data).then(()=>{return res.json({message:"Succesfully edited",status:true})}).catch((err)=>{return res.json({message:"Cannot edit",status:false})})
    }
    else{
        return res.json({message:"Event doesnt exist",status:false})
    }
})

router.post('/deleteEvent',async (req,res)=>{
    const {eventName} = req.body

    const data = await Event.findOneAndDelete({eventName:eventName}).then(()=>{return res.json({message:"Succesfully deleted",status:true})}).catch((err)=>{return res.json({message:"Cannot delete",status:false})})

})

module.exports = router;