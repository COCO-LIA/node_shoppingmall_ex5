

const express = require('express')

const bodyParser = require('body-parser')

const app = express()

// //req res test
// app.use((req, res) => {
//     res.json({
//         message : "server started"
//     })
// })

const stRoute = require("./route/st")
const gmarketRoute = require("./route/g-market")

//미들웨어 설정
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/st", stRoute)
app.use("/gmarket", gmarketRoute)

const port = 3000

app.listen(port, console.log("server started"))