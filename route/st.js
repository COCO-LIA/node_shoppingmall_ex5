const express = require("express")
const router = express.Router()

router.get("/st", (req, res)=>{
   const stInfo = {
       stpost: req.body.st1,
       stpatch: req.body.st2,
       stdelete: req.body.st3
   }

    res.json({
        message: "11st get",
        st: stInfo
    })
})

router.patch("/", (req, res) =>{
    res.json({
        msg: "11st patch"
    })
})

router.post( "/", (req, res)=>{
    res.json({
        msg : "11st patct"
    })
})

router.delete("/", (req, res)=>{
    res.json({
        msg : "11st delete"
    })
})


module.exports = router