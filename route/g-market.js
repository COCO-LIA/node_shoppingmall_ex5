const express = require("express")
const router = express.Router()

//gmarket 불러오는 API
router.get("/gmarket", (req, res) => {

    const gmarketInfo = {
        gmarketpost : req.body.gpost,
        gmarketpatch : req.body.gpatch,
        gmarketdelete : req.body.gdelete
    }

    res.json({
        message : "gmarket",
        gmarket : gmarketInfo
    })
})

router.post("/", (req, res) =>{



    res.json({
        message : " gmarker post"
    })
})

router.patch("/", (req, res) =>{
    res.json({
        message : "gmarker patct"
    })
})

router.delete("/", (req, res) =>{
    res.json({
        message : "gmarket delete"
    })
})

module.exports = router