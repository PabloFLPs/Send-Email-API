const express = require("express")
const nodemailer = require("nodemailer")

const app = express()
const PORT = process.env.PORT || 3030

//const SMTP_CONFIG = require("./config/smtp")

app.use(express.json(), express.urlencoded())

app.get("/", async(request, response) => {
  return response.json({
    "Example JSON post": "example",
    "name": "name",
    "email": "email@emailDomain.com",
    "message": "message"
  })
})

app.post("/send-email", async(request, response) => {
  //host: SMTP_CONFIG.host
  let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "send.email.free.api@gmail.com",
      pass: "my-free-api-send-email-nodemailer-smtp-gmail"
    },
    tls: {
      rejectUnauthorized: false
    }

    /*
    host: process.env.HOST,
    port: process.env.PORT,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
    */
  })

  console.log(request.body)

  let message = {
    from: `${request.body.name}`,
    to: "send.email.free.api@gmail.com",
    subject: "Get in Touch - My Portifolio",
    text: `${request.body.message} - Att.: ${request.body.name}: <${request.body.email}>`
  }

  transport.sendMail(message, function(err){
    if(err) return response.status(400).json({
      error: true,
      message: "Error: Email not sent!"
    })
  })

  return response.json({
    message: "Email successfully sent! You can close this page now :D"
  })
})

app.listen(PORT, () => {
  console.log(`Server initialized on port ${PORT}: http://localhost:${PORT}`)
})