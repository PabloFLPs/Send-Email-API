const express = require("express")
const nodemailer = require("nodemailer")

const app = express()
const PORT = process.env.PORT || 3030

const SMTP_CONFIG = require("./config/smtp")

app.use(express.json(), express.urlencoded())

app.post("/send-email", async(request, response) => {
  let transport = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
      user: SMTP_CONFIG.user,
      pass: SMTP_CONFIG.pass,
    },
    tls: {
      rejectUnauthorized: false
    }
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
    error: false,
    message: "email sent!"
  })
})

app.listen(PORT, () => {
  console.log(`Server initialized on port ${PORT}: http://localhost:${PORT}`)
})