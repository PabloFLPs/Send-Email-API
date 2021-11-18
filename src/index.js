const express = require("express")
const nodemailer = require("nodemailer")

require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3030

const host = process.env.API_HOST
const apiPort = process.env.API_PORT
const user = process.env.API_USER
const password = process.env.API_PASSWORD

app.use(express.json(), express.urlencoded())

app.get("/", (request, response) => {
  return response.json({
    "name": "name",
    "email": "senderEmail@emailDomain.com",
    "addressee": "addresseeEmail@emailDomain.com",
    "message": "message"
  })
})

app.post("/send-email", (request, response) => {
  let transport = nodemailer.createTransport({
    host: host,
    port: apiPort,
    secure: false,
    auth: {
      user: user,
      pass: password
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  let data = request.body

  transport.sendMail({
    from: `${data.name}`,
    to: `${data.addressee}` || "send.email.free.api@gmail.com",
    subject: "Send Email Free API - Message",
    text: `${data.message} - Att.: ${data.name}: <${data.email}>`
  }, function(err){
    if(err) return response.status(400).json({
      error: true,
      message: "The email was not sent!"
    })
  })

  console.log(data, `${host}:${user}`)

  return response.json({
    error: false,
    message: "Email successfully sent! You can close this page now :D"
  })
})

app.listen(PORT, () => {
  console.log(`Server initialized on port ${PORT}: http://localhost:${PORT}`)
})