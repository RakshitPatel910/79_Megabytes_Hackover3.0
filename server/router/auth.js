const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();


require('../db/conn')

const Cust = require("../model/customerSchema")
const Admin = require("../model/adminSchema")
const Org = require("../model/organizerSchema");
const Organizer = require("../model/organizerSchema");

const saltRound = parseInt(process.env.SALTROUND); 
const salt = bcrypt.genSaltSync(saltRound);

async function encryption(data){
    return bcrypt.hash(data, salt);
} 


//customer
router.post('/custSignup',async (req,res)=>{
    const {userName ,email,password} = req.body
    const newPassword = await encryption(password)
    const cust = await Cust.findOne({email:email})
    if(cust){
        return res.json({message:"Customer already exist",status:false})
    }
    else{
        const newCust = new Cust({userName,email,password:newPassword})

        await newCust.save().then(()=>{
            res.json({message:"SIgnup successfully",status:true})
        }).catch((err)=>{
            return res.json({message:"Signup failed",status:false})
        })
    }
})

router.post('/custSignin',async(req,res)=>{
    const {email,password} = req.body
    const data = await Cust.findOne({email:email}).then(e=>{
        console.log(e)
        if(e == null){
            return res.json({ message: "Customer does not exist", status: false });
        }
        else if(e.length == 0 ){
            return res
              .json({ message: "Customer does not exist", status: false });
        } 
        else{
            if (bcrypt.compareSync(password, e.password)) {
                // console.log("Cust exists");
                return res.json({
                    message: "Successfully Logged in",
                    status: true,
                    profile: e
                }); 
            }
            else{
              return res.json({message:"Password is incorrect",status:false})
            }
        } 
    })
})

//admin

router.post('/adminSignin',async (res,req)=>{
    const { email, password } = req.body;
    const data = await Admin.findOne({ email: email }).then((e) => {
      console.log(e);
      if (e == null) {
        return res.json({ message: "Admin does not exist", status: false });
      } else if (e.length == 0) {
        return res.json({ message: "Admin does not exist", status: false });
      } else {
        if (bcrypt.compareSync(password, e.password)) {
          // console.log("Cust exists");
          return res.json({
            message: "Successfully Logged in",
            status: true,
            profile: e,
          });
        } else {
          return res.json({ message: "Password is incorrect", status: false });
        }
      }
    });
})

//organizer
router.post("/orgSignup", async (req, res) => {
  const { userName, email, password } = req.body;
  const newPassword = await encryption(password);
  const cust = await Org.findOne({ email: email });
  if (cust) {
    return res.json({ message: "Organizer already exist", status: false });
  } else {
    const newCust = new Org({ userName, email, password: newPassword });

    await newCust
      .save()
      .then(() => {
        res.json({ message: "SIgnup successfully", status: true });
      })
      .catch((err) => {
        return res.json({ message: "Signup failed", status: false });
      });
  }
});

router.post("/orgSignin", async (req, res) => {
  const { email, password } = req.body;
  const data = await Org.findOne({ email: email }).then((e) => {
    console.log(e);
    if (e == null) {
      return res.json({ message: "Customer does not exist", status: false });
    } else if (e.length == 0) {
      return res.json({ message: "Customer does not exist", status: false });
    } else {
      if (bcrypt.compareSync(password, e.password)) {
        // console.log("Cust exists");
        return res.json({
          message: "Successfully Logged in",
          status: true,
          profile: e,
        });
      } else {
        return res.json({ message: "Password is incorrect", status: false });
      }
    }
  });
});


module.exports = router;